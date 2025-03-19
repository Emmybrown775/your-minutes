import CustomButton from "@/components/CustomButtons";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { Livvic_500Medium } from "@expo-google-fonts/livvic";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Audio } from "expo-av";
import axios from "axios";

export default function NewMeeting() {
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [transcript, setTranscript] = useState("");

  const startRecording = async () => {
    try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        staysActiveInBackground: true,
      });
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY,
      );
      setRecording(recording);
    } catch (err) {
      console.error("Failed to start recording:", err);
    }
  };

  const stopRecording = async () => {
    setRecording(null);
    await recording?.stopAndUnloadAsync();
    const uri = recording?.getURI();

    transcribeAudio(uri);
  };

  const transcribeAudio = async (audioUri: string | null | undefined) => {
    const formData = new FormData();

    formData.append("file", {
      uri: audioUri,
      name: "recording.wav",
      type: "audio/wav",
    } as any);

    try {
      const response = await axios.post(
        "https://7807-102-90-82-184.ngrok-free.app/transcribe",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      setTranscript(response.data.transcript);
    } catch (error) {
      console.error("Error transcribing audio:", error);
    }
  };
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.view}>
        <View>
          <ThemedText type="title">New Meeting</ThemedText>
          <TextInput
            style={{
              borderRadius: 10,
              borderWidth: 2,
              borderColor: Colors.secondary,
              fontFamily: "Livvic_500Medium",
              color: Colors.text,
              paddingLeft: 15,
              marginVertical: 20,
            }}
          >
            Title
          </TextInput>
          <CustomButton
            text={recording ? "Stop Recording" : "Start Recording"}
            onPress={recording ? stopRecording : startRecording}
          />
        </View>

        <View
          style={[
            {
              marginTop: 50,
            },
            styles.cardView,
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <ThemedText type="subtitle">Live Transcript</ThemedText>
            <TouchableOpacity>
              <Ionicons name="copy" size={20} color={Colors.icon} />
            </TouchableOpacity>
          </View>

          <View>
            <ScrollView
              style={{
                height: 300,
                marginTop: 30,
                backgroundColor: Colors.background,
                borderRadius: 20,
              }}
            >
              <ThemedText>{transcript}</ThemedText>
            </ScrollView>
          </View>
        </View>
        <View
          style={{ flexDirection: "row", justifyContent: "flex-end", gap: 20 }}
        >
          <CustomButton text="Discard" />
          <CustomButton text="Save" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.background,
    paddingTop: 40,
  },

  view: {
    paddingHorizontal: 40,
  },

  cardView: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    elevation: 10,
    backgroundColor: Colors.tint,
    borderRadius: 10,

    marginVertical: 10,
  },
});
