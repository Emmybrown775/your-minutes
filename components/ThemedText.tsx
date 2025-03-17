import { Colors } from "@/constants/Colors";
import {
  Livvic_300Light,
  Livvic_400Regular,
  Livvic_600SemiBold,
  Livvic_700Bold,
} from "@expo-google-fonts/livvic";
import { Text, type TextProps, StyleSheet } from "react-native";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  return (
    <Text
      style={[
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.text,
    fontFamily: `Livvic_400Regular`,
  },
  defaultSemiBold: {
    fontSize: 24,
    lineHeight: 24,
    color: Colors.text,
    fontFamily: "Livvic_600SemiBold",
  },
  title: {
    fontSize: 32,
    lineHeight: 32,
    color: Colors.text,
    fontFamily: "Livvic_700Bold",
  },
  subtitle: {
    fontSize: 20,
    color: Colors.text,
    fontFamily: "Livvic_700Bold",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
    fontFamily: "Livvic_300Light",
  },
});
