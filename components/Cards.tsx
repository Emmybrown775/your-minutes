import { IconProps } from "@expo/vector-icons/build/createIconSet";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { Colors } from "@/constants/Colors";

type Props = {
  title: String;
  value: String;
};

export default function CustomCard({
  title = "Todays Meetings",
  value = "3",
}: Props) {
  return (
    <View style={styles.view}>
      <ThemedText type="subtitle" style={{ paddingBottom: 20 }}>
        {title}
      </ThemedText>
      <ThemedText style={{ color: Colors.secondary }} type="defaultSemiBold">
        {value}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    elevation: 10,
    backgroundColor: Colors.tint,
    borderRadius: 10,

    marginVertical: 10,
  },
});
