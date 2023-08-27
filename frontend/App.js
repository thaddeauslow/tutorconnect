import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginRegister from "./screens/LoginRegister";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Catalogue from "./screens/Catalogue";

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
    <Stack.Navigator initialRouteName='LoginRegister'
      screenOptions={{
        animationEnabled: false,
        headerLeft: () => <BackButton />,
        headerStyle: {
          backgroundColor: "#BCD9E0",
        },
        headerTintColor: "#BCD9E0",
        cardStyle: {
          backgroundColor: "#BCD9E0",
        },
      }}
    >
      <Stack.Screen
        name="LoginRegister"
        component={LoginRegister}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Catalogue"
        component={Catalogue}
        options={{ headerShown: false }}
      />
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
