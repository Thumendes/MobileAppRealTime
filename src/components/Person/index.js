import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../Button";
import io from "../../../services/socket";

const Person = ({ name, genre, age, id }) => {
  return (
    <View style={styles.container}>
      <Text style={genre === "M" ? styles.male : styles.female}>{genre}</Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.age}>{age}</Text>
      <Button
        title="Excluir"
        type="dark"
        onPress={() => io.emit("delete", id)}
      />
    </View>
  );
};

export default Person;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  male: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#0f0",
    color: "#0a0",
  },
  female: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#f00",
    color: "#a00",
  },
  name: {
    fontWeight: "bold",
  },
  age: {
    color: "#aaa",
  },
});
