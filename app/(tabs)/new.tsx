import CustomButton from "@/components/CustomButtons";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { Livvic_500Medium } from "@expo-google-fonts/livvic";
import { Ionicons } from "@expo/vector-icons";
import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function NewMeeting() {
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
          <CustomButton text="Start Recording" />
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
            ></ScrollView>
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
