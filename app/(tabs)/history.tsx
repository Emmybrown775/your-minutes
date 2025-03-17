import { ScrollView, StyleSheet, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";
import RecentMeetings from "@/components/RecentMeetings";

export default function () {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.view}>
        <ThemedText type="title">Meeting History</ThemedText>
        <RecentMeetings />
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
