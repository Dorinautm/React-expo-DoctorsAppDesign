import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import { Card } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, StackView } from "@react-navigation/stack";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";

export default function SignupScreen({ navigation }) {
  const [text, setText] = useState("");
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.circle}>
          <AntDesign name="user" color="gray" size={52} />
          <Text style={{ fontSize: 22, paddingTop: 10 }}>ADD PHOTO</Text>
        </TouchableOpacity>

        <Text style={styles.text}>Full Name</Text>

        <TextInput
          theme={{ colors: { primary: "#07da5f", underlineColor: "gray" } }}
          mode="outlined"
          selectionColor="#07da5f"
          style={styles.input}
          placeholder="Your full name"
          onChangeText={(text) => setText(text)}
          defaultValue={text}
        />
        <Text style={styles.text}>Birthday</Text>
        <TextInput
          theme={{ colors: { primary: "#07da5f" } }}
          mode="outlined"
          selectionColor="#07da5f"
          style={styles.input}
          placeholder="dd/mm/yy"
          onChangeText={(text) => setText(text)}
          defaultValue={text}
        />
        <Text style={styles.text}>Email</Text>
        <TextInput
          theme={{ colors: { primary: "#07da5f" } }}
          mode="outlined"
          selectionColor="#07da5f"
          style={styles.input}
          placeholder="Your Email"
          onChangeText={(text) => setText(text)}
          defaultValue={text}
        />
        <Text style={styles.text}>Phone Number</Text>
        <TextInput
          theme={{ colors: { primary: "#07da5f" } }}
          mode="outlined"
          selectionColor="#07da5f"
          style={styles.input}
          placeholder="Your Phone Number"
          onChangeText={(text) => setText(text)}
          defaultValue={text}
        />
        <Text style={styles.text}>Location/Adress</Text>
        <TextInput
          theme={{ colors: { primary: "#07da5f" } }}
          mode="outlined"
          selectionColor="#07da5f"
          style={styles.input}
          placeholder="Your Location"
          onChangeText={(text) => setText(text)}
          defaultValue={text}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("telemedicine")}
          style={styles.button}
        >
          <Text style={{ fontSize: 20, color: "white" }}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  circle: {
    marginLeft: 100,
    marginTop: 60,
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "grey",
    borderStyle: "dashed",
    backgroundColor: "white",
  },
  input: {
    backgroundColor: "white",
    fontSize: 15,
    borderColor: "grey",
    width: 350,
    justifyContent: "center",
    paddingLeft: 40,
    paddingTop: 5,
    paddingBottom: 20,
  },
  text: {
    paddingTop: 10,
    paddingLeft: 40,
    paddingBottom: 5,
    fontSize: 15,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#07da5f",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    width: 350,
    marginTop: 45,
    marginHorizontal: 24,
    marginBottom: 30,
  },
});
