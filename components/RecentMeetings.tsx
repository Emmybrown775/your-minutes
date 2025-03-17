import { View } from "react-native";
import { ThemedText } from "./ThemedText";
import { Colors } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";

const meetings = [
  {
    title: "Weekly Team Sync",
    date: "2024-03-15",
    time: "45",
  },
  {
    title: "Weekly Team Sync",
    date: "2024-03-15",
    time: "45",
  },
];

export default function RecentMeetings() {
  return (
    <View>
      <ThemedText style={{ paddingBottom: 10, paddingTop: 30 }} type="subtitle">
        Recent Meetings
      </ThemedText>
      {meetings.map((meeting, index) => {
        return (
          <View
            key={index}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderBottomWidth: index === meetings.length - 1 ? 0 : 1,
              borderColor: Colors.tint,
              paddingVertical: 10,
            }}
          >
            <View>
              <ThemedText>{meeting.title}</ThemedText>
              <ThemedText type="link">{meeting.date}</ThemedText>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <MaterialIcons
                name="timer"
                style={{ color: Colors.secondary }}
                size={20}
              />
              <ThemedText>{meeting.time} mins</ThemedText>
            </View>
          </View>
        );
      })}
    </View>
  );
}
