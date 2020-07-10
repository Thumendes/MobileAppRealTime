import React, { useRef } from "react";
import { Form as FormNative } from "@unform/mobile";

import Input from "../Input";
import Button from "../Button";
import io from "../../../services/socket";
import { Alert } from "react-native";

const Form = () => {
  const formRef = useRef(null);

  const handleSubmit = (data, { reset }) => {
    io.emit("add", data);
    Alert.alert(`${data.name} foi adicionado`);
    reset();
  };

  return (
    <FormNative ref={formRef} onSubmit={handleSubmit}>
      <Input name="name" type="text" placeholder="Name" />
      <Input name="age" type="number" placeholder="Idade" />
      <Input name="genre" type="text" placeholder="Genero" />
      <Button
        title="Clica ae"
        type="dark"
        onPress={() => formRef.current.submitForm()}
      />
    </FormNative>
  );
};

export default Form;
