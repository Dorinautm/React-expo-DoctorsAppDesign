import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { Card } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, StackView } from "@react-navigation/stack";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

export default function DoctorsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("DoctorContact")}>
        <Card>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 100,
                  backgroundColor: "black",
                }}
              />
            </View>

            <View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.name}>Name Surname</Text>
                <AntDesign
                  style={styles.star}
                  name="star"
                  size={23}
                  color="#FFDF00"
                />
                <Text style={styles.rating}>4.9</Text>
              </View>

              <Text style={styles.speciality}>Eye Specialist</Text>

              <View style={styles.location}>
                <EvilIcons name="location" size={26} color="gray" />
                <Text style={{ color: "gray", fontSize: 18 }}>
                  St.Bronxlyn 212
                </Text>
              </View>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("DoctorContact")}>
        <Card>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 100,
                  backgroundColor: "#86f067",
                }}
              />
            </View>

            <View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.name}>Name Surname</Text>
                <AntDesign
                  style={styles.star}
                  name="star"
                  size={23}
                  color="#FFDF00"
                />
                <Text style={styles.rating}>4.9</Text>
              </View>

              <Text style={styles.speciality}>Eye Specialist</Text>

              <View style={styles.location}>
                <EvilIcons name="location" size={26} color="gray" />
                <Text style={{ color: "gray", fontSize: 18 }}>
                  St.Bronxlyn 212
                </Text>
              </View>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("DoctorContact")}>
        <Card>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 100,
                  backgroundColor: "#8664f0",
                }}
              />
            </View>

            <View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.name}>Name Surname</Text>
                <AntDesign
                  style={styles.star}
                  name="star"
                  size={23}
                  color="#FFDF00"
                />
                <Text style={styles.rating}>4.9</Text>
              </View>

              <Text style={styles.speciality}>Eye Specialist</Text>

              <View style={styles.location}>
                <EvilIcons name="location" size={26} color="gray" />
                <Text style={{ color: "gray", fontSize: 18 }}>
                  St.Bronxlyn 212
                </Text>
              </View>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    paddingTop: 20,
  },
  name: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  rating: {
    margin: 5,
    color: "gray",
    fontSize: 17,
  },
  star: {
    margin: 5,
    marginBottom: 1,
  },
  speciality: {
    marginLeft: 10,
    fontStyle: "italic",
    color: "#07da5f",
    fontSize: 18,
  },
  location: {
    flexDirection: "row",
    marginLeft: 5,
    marginTop: 15,
    color: "gray",
    fontSize: 20,
  },
});
