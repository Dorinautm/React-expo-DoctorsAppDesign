import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, StackView } from "@react-navigation/stack";
import SignupScreen from "../screens/signup";

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/background.png")}
      style={styles.container}
    >
      <Text style={{ fontSize: 40, color: "white", paddingTop: 130 }}>
        Welcome
      </Text>
      <Text
        numberOfLines={3}
        style={{
          fontSize: 18,
          color: "white",
          textAlign: "center",
          paddingTop: 40,
          paddingHorizontal: 30,
          paddingBottom: 120,
        }}
      >
        Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, t. Ut enim ad
        veni am, quis nostrud exercitation ullamco{" "}
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("SignUp")}
        style={{
          backgroundColor: "white",
          borderRadius: 50,
          alignItems: "center",
          justifyContent: "center",
          height: 70,
          width: 350,
        }}
      >
        <Text style={{ fontSize: 20, color: "#07da5f" }}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("LogIn")}
        style={{
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor: "white",
          borderRadius: 50,
          alignItems: "center",
          justifyContent: "center",
          height: 70,
          width: 350,
          marginTop: 45,
        }}
      >
        <Text style={{ fontSize: 20, color: "white" }}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ margin: 72 }}>
        <Text style={{ fontSize: 20, color: "white" }}>URGENT</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
