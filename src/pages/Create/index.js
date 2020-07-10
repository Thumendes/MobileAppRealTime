import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Form from "../../components/Form";

const Create = () => {
  return (
    <View style={styles.container}>
      <Form />
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
