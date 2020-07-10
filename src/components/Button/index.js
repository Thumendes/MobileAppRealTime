import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";

const Button = ({ title, type, ...rest }) => {
  return (
    <Pressable style={styles.button} {...rest}>
      <Text style={{ color: type === "dark" ? "#fff" : "#222" }}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: "#0070f3",
    borderRadius: 10,
    alignItems: "center",
  },
});
