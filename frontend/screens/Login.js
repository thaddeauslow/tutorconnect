import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
  Switch,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Login({ navigation }) {

    //email
    const [email, setEmail] = React.useState("");
    //password
    const [password, setPassword] = React.useState("");

    const userData = {"email": email, "password": password}


    const submitUser = () => {
        fetch("https://tutor-connect-5542469f5e53.herokuapp.com/authentication", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            method: "POST",
            body: JSON.stringify(userData)
        })
        .then(response=>response.text())
        .then(res => {
            const item = JSON.parse(res) 
            if (Object.keys(item)[0] === "success") {
                navigation.navigate('Catalogue');
            }
        //function to handle results
        //if success enter to personalisation page with name json
        })
        .catch(error =>{
        console.error(error.message)
        })
    }
  

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/Login/bg.png")}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <View style={styles.usernameContainer}>
          <Image
            style={styles.personIcon}
            source={require("../assets/Login/email.png")}
          />
          <TextInput
            style={styles.username}
            placeholder="Username"
            placeholderTextColor="rgb(163, 133, 115)"
            onChangeText={newEmail => setEmail(newEmail)}
          />
        </View>

        <View style={styles.passwordContainer}>
          <Image
            style={styles.lockIcon}
            source={require("../assets/Login/password.png")}
          />
          <TextInput
            style={styles.password}
            placeholder="Password"
            placeholderTextColor="rgb(163, 133, 115)"
            onChangeText={newPassword => setPassword(newPassword)}
          />
        </View>

        <View style={styles.rememberContainer}>
          <Switch
            trackColor={{ false: "#D3D3D3", true: "#9CE490" }}
            thumbColor={isEnabled ? "white" : "white"}
            ios_backgroundColor="#D3D3D3"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />

          <Text style={styles.rememberText}>Remember me</Text>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={submitUser}
          >
            <Image
              style={styles.loginButton}
              source={require("../assets/Login/button.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  back: {
    width: 90,
    height: 42,
    marginTop: 50,
    marginLeft: 10,
  },
  usernameContainer: {
    width: 250,
    marginTop: 250,
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#F9EEDF",
    padding: 25,
    width: 220,
    borderWidth: 2,
    borderColor: "rgb(163, 133, 115)",
    borderRadius: 50,
    color: "rgb(163, 133, 115)",
  },
  personIcon: {
    width: 20,
    height: 20,
  },
  username: {
    backgroundColor: "#F9EEDF",
    paddingLeft: 10,
    height: 25,
    width: 150,
    color: "rgb(163, 133, 115)",
    textAlign: "center",
    fontSize: 28,
  },
  passwordContainer: {
    width: 250,
    marginTop: 30,
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#F9EEDF",
    padding: 25,
    width: 220,
    borderWidth: 2,
    borderColor: "rgb(163, 133, 115)",
    borderRadius: 50,
    color: "rgb(163, 133, 115)",
  },
  lockIcon: {
    width: 20,
    height: 25,
  },
  password: {
    backgroundColor: "#F9EEDF",
    paddingLeft: 10,
    height: 25,
    width: 150,
    color: "rgb(163, 133, 115)",
    textAlign: "center",
    fontSize: 28,
  },
  rememberContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  rememberText: {
    color: "#3B0200",
    fontSize: 24,
    marginLeft: 5,
  },
  forgotContainer: {
    marginTop: 30,
    borderBottomWidth: 2,
    borderColor: "#F9EEDF",
  },
  forgotText: {
    color: "#F9EEDF",
    fontSize: 26,
    // textDecorationLine: "underline",
    marginLeft: 5,
  },
  loginButton: {
    marginTop: 20,
    width: 205,
    height: 73,
  },
});
