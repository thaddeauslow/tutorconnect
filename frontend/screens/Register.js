import React, { useState } from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Switch,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Register({ navigation }) {
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);
    
  const redirect = async(res) => {
        const item = JSON.parse(res) 
        if (Object.keys(item)[0] === "success") {
            navigation.navigate('Catalogue')
        }
        else {
            //set text to error json
            console.log("error")
        }
    }
    //email
    const [email, setEmail] = useState("");
    //password
    const [password, setPassword] = useState("");
    //checkpassword
    const [checkPassword, setCheckpassword] = useState("");

    const userData = {"email": email, "password": password, "role": "student"}

    const submitNewUser = async() => {
        fetch("https://tutor-connect-5542469f5e53.herokuapp.com/register", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            method: "POST",
            body: JSON.stringify(userData)
        })
        .then(response=>response.text())
        .then(res => {
            redirect(res)
        //function to handle results
        })
        .catch(error =>{
        console.error(error.message)
        })
        }


  return (
    <ImageBackground
      source={require("../assets/Register/bg.png")}
      style={styles.backgroundImage}
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
            source={require("../assets/Register/email.png")}
            style={styles.icon}
          />
          <TextInput
            style={styles.username}
            placeholder="Enter your email"
            placeholderTextColor="rgb(163, 133, 115)"
            onChangeText={newEmail => setEmail(newEmail)}
          />
        </View>

        <View style={styles.textContainer}>
          <Image
            source={require("../assets/Register/password.png")}
            style={styles.lock}
          />
          <TextInput
            style={styles.text}
            placeholder="Enter your password"
            placeholderTextColor="rgb(163, 133, 115)"
            onChangeText={newPassword => setPassword(newPassword)}
          />
        </View>

        <View style={styles.textContainer}>
          <Image
            source={require("../assets/Register/password.png")}
            style={styles.lock}
          />
          <TextInput
            style={styles.text}
            placeholder="Confirm password"
            placeholderTextColor="rgb(163, 133, 115)"
            onChangeText={checkPassword => setCheckpassword(checkPassword)}
          />
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={submitNewUser}
          >
            <Image
              style={styles.loginButton}
              source={require("../assets/Register/button.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "center",
    height: 760,
  },
  back: {
    width: 90,
    height: 42,
    marginTop: 50,
    marginLeft: 10,
  },
  usernameContainer: {
    marginTop: 140,
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#F9EEDF",
    padding: 25,
    width: 300,
    borderWidth: 2,
    borderColor: "rgb(163, 133, 115)",
    borderRadius: 50,
    color: "rgb(163, 133, 115)",
  },
  icon: {
    width: 20,
    height: 20,
  },
  username: {
    backgroundColor: "#F9EEDF",
    paddingLeft: 10,
    height: 25,
    width: 240,
    color: "rgb(163, 133, 115)",
    fontSize: 18,
  },
  textContainer: {
    marginTop: 10,
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#F9EEDF",
    padding: 25,
    width: 300,
    borderWidth: 2,
    borderColor: "rgb(163, 133, 115)",
    borderRadius: 50,
    color: "rgb(163, 133, 115)",
  },
  text: {
    backgroundColor: "#F9EEDF",
    paddingLeft: 10,
    height: 25,
    width: 240,
    color: "rgb(163, 133, 115)",
    fontFamily: "Arial",
    fontSize: 18,
  },
  lock: {
    width: 20,
    height: 25,
  },
  loginButton: {
    marginTop: 100,
    width: 205,
    height: 73,
  },
});
