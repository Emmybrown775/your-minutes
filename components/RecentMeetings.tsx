import { TouchableOpacity, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { Colors } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { setParams } from "expo-router/build/global-state/routing";

const meetings = [
  {
    title: "Weekly Team Sync",
    date: "2024-03-15",
    time: "45",
    minutes: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

    Key Points Discussed:
    - Project timeline review
    - Budget allocation
    - Team performance metrics
    - Upcoming milestones

    Action Items:
    1. Update project documentation
    2. Schedule follow-up meetings
    3. Prepare quarterly report

    Next Steps:
    - Review deliverables by Friday
    - Set up stakeholder meeting
    - Distribute meeting minutes`,
  },
  {
    title: "Weekly Team Sync",
    date: "2024-03-15",
    time: "45",
    minutes: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

    Key Points Discussed:
    - Project timeline review
    - Budget allocation
    - Team performance metrics
    - Upcoming milestones

    Action Items:
    1. Update project documentation
    2. Schedule follow-up meetings
    3. Prepare quarterly report

    Next Steps:
    - Review deliverables by Friday
    - Set up stakeholder meeting
    - Distribute meeting minutes`,
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
          <TouchableOpacity
            key={index}
            onPress={() => {
              router.push({
                pathname: "/details",
                params: {
                  title: meeting.title,
                  date: meeting.date,
                  time: meeting.time,
                  minutes: meeting.minutes,
                },
              });
            }}
          >
            <View
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
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
