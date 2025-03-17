import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "@/components/CustomButtons";

export default function Details() {
  const { title, date, time, minutes } = useLocalSearchParams();
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.view}>
        <ThemedText type="title">{title}</ThemedText>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Ionicons name="calendar" size={20} color={Colors.secondary} />
            <ThemedText>{date}</ThemedText>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Ionicons name="time" size={20} color={Colors.secondary} />
            <ThemedText>{time} mins</ThemedText>
          </View>
        </View>

        <View style={{ flexDirection: "row", gap: "30", paddingTop: 30 }}>
          <CustomButton text="Share" />
          <CustomButton text="Download" />
        </View>

        <View style={styles.cardView}>
          <ThemedText type="subtitle">Meeting Minutes</ThemedText>
          <ThemedText>{minutes}</ThemedText>
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
    paddingVertical: 10,
    elevation: 10,
    backgroundColor: Colors.tint,
    borderRadius: 10,

    marginVertical: 40,
  },
});
