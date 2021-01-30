import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "./screens/home";
import DoctorsScreen from "./screens/doctorlist";
import WelcomeScreen from "./screens/welcome";
import NotificationScreen from "./screens/notifications";
import SignupScreen from "./screens/signup";
import LogScreen from "./screens/login";
import ContactScreen from "./screens/drcontact";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, StackView } from "@react-navigation/stack";

import { AntDesign } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function Footer() {
  return (
    <Tab.Navigator
      initialRouteName="Nav"
      activeColor="#07da5f"
      barStyle={{ backgroundColor: "white" }}
    >
      <Tab.Screen
        name="Nav"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          tabBarLabel: "Notifications",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Plus"
        component={NotificationScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <View
              style={{
                position: "absolute",
                bottom: -20, // space from bottombar
                height: 68,
                width: 68,
                borderRadius: 68,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AntDesign name="pluscircle" color="#07da5f" size={48} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={DoctorsScreen}
        options={{
          tabBarLabel: "Doctors",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={WelcomeScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#07da5f",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="Telemedicine" component={WelcomeScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="LogIn" component={LogScreen} />
        <Stack.Screen name="telemedicine" component={Footer} />
        <Stack.Screen name="DoctorContact" component={ContactScreen} />
      </Stack.Navigator>
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
