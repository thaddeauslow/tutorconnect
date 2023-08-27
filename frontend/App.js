import { StyleSheet, Image } from "react-native";
import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginRegister from "./screens/LoginRegister";
import Register from "./screens/Register";
import Login from "./screens/Login";
import { TouchableOpacity } from "react-native-gesture-handler";

function BackButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Image
        style={{ width: 90, height: 42, marginLeft: 5 }}
        source={require("./assets/back.png")}
      />
    </TouchableOpacity>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        animationEnabled: false,
        headerLeft: () => <BackButton />,
        headerStyle: {
          backgroundColor: "#D8DCFF",
        },
        headerTintColor: "#D8DCFF",
        cardStyle: {
          backgroundColor: "#D8DCFF",
        },
      }}
    >
      <Stack.Screen
        name="LoginRegister"
        component={LoginRegister}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
