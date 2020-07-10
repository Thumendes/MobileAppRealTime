import "react-native-gesture-handler";
import React from "react";

import { StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import List from "./src/pages/List";
import Create from "./src/pages/Create";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#0070f3" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#2b85ed",
          },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Create" component={Create} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
