import { Colors } from "@/constants/Colors";
import { Tabs } from "expo-router";
import { StatusBar } from "react-native";

export default function TabLayouts() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.text,
        tabBarStyle: {
          backgroundColor: Colors.background,
        },
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Dashboard" }} />
    </Tabs>
  );
}
