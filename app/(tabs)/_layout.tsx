import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
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
        tabBarIconStyle: {
          color: Colors.icon,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                style={{ color: color }}
                name={focused ? "apps" : "apps-outline"}
                size={size}
              />
            );
          },
        }}
      />

      <Tabs.Screen
        name="new"
        options={{
          title: "New",
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                style={{ color: color }}
                name={focused ? "add" : "add-outline"}
                size={size}
              />
            );
          },
        }}
      />

      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                style={{ color: color }}
                name={focused ? "time" : "time-outline"}
                size={size}
              />
            );
          },
        }}
      />
    </Tabs>
  );
}
