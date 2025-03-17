import CustomCard from "@/components/Cards";
import RecentMeetings from "@/components/RecentMeetings";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { StatusBar } from "react-native";
import { ScrollView } from "react-native";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView style={styles.scrollable}>
      <View style={styles.view}>
        <ThemedText style={{ paddingBottom: 10 }} type="title">
          Welcome to Your Minutes
        </ThemedText>
        <CustomCard title={"Today's Meeting"} value={"3"} />
        <CustomCard title={"Minutes Generated"} value={"123"} />
        <View>
          <RecentMeetings />
        </View>
      </View>
      <StatusBar backgroundColor={Colors.background} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollable: {
    backgroundColor: Colors.background,
    paddingTop: 40,
  },
  view: {
    paddingHorizontal: 40,
  },
});
