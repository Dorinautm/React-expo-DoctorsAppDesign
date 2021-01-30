import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, StackView } from "@react-navigation/stack";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

export default function LogScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/background.png")}
      style={styles.container}
    >
      <Text style={styles.title}>Telemedicine</Text>

      <TouchableOpacity style={styles.login}>
        <View style={{ flexDirection: "row" }}>
          <AntDesign name="user" color="#fff" size={28} />
          <Text style={styles.logintext}>Email Address</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.password}>
        <View style={{ flexDirection: "row" }}>
          <EvilIcons name="lock" size={42} color="#fff" />
          <Text style={styles.passwordtext}>Password</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("telemedicine")}
        style={styles.loginbutton}
      >
        <Text style={{ fontSize: 20, color: "#07da5f" }}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("SignUp")}
        style={{ margin: 72 }}
      >
        <Text style={{ fontSize: 20, color: "white" }}>SIGNUP</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 45,
    paddingTop: 120,
    paddingBottom: 100,
  },
  login: {
    borderWidth: 1,
    borderColor: "white",
    width: 350,
    borderRadius: 5,
    height: 55,
    justifyContent: "center",
    paddingLeft: 11,
  },
  logintext: {
    color: "white",
    paddingLeft: 10,
    paddingTop: 4,
    fontSize: 18,
  },
  password: {
    borderWidth: 1,
    borderColor: "white",
    width: 350,
    borderRadius: 5,
    height: 55,
    justifyContent: "center",
    paddingLeft: 5,
    marginTop: 40,
  },
  passwordtext: {
    color: "white",
    paddingLeft: 7,
    paddingTop: 4,
    fontSize: 19,
  },
  loginbutton: {
    backgroundColor: "white",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    width: 350,
    marginTop: 70,
  },
});
