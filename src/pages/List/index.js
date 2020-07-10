import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../../components/Button";
import io from "../../../services/socket";
import Person from "../../components/Person";

const List = ({ navigation }) => {
  const [pessoas, setPessoas] = useState([]);

  useEffect(() => {
    io.on("render", (data) => {
      setPessoas(data);
    });
  }, []);

  if (!pessoas.length) {
    return <Text>Carregando...</Text>;
  }
  return (
    <View style={styles.container}>
      {pessoas.map((pessoa, index) => (
        <Person
          key={index}
          age={pessoa.age}
          genre={pessoa.genre}
          name={pessoa.name}
          id={index}
        />
      ))}
      <Button
        title="Adicionar uma nova pessoa"
        type="dark"
        onPress={() => navigation.navigate("Create")}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
