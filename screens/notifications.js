import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Card } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";

export default function NotificationScreen() {
  return (
    <ScrollView>
      <View style={StyleSheet.container}>
        <View style={styles.cerc}>
          <FontAwesome5 name="check-circle" size={120} color="#07da5f" />
        </View>

        <View>
          <Text numberOfLines={3} style={styles.text1}>
            Your Request Has Been Approved
          </Text>

          <Text numberOfLines={3} style={styles.text2}>
            Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, t. Ut enim
            ad veni am, quis nostrud exercitation ullamco
          </Text>

          <Text
            style={{
              color: "#07da5f",
              fontWeight: "bold",
              fontSize: 20,
              marginLeft: 25,
              marginTop: 40,
            }}
          >
            Request Details
          </Text>

          <Text style={styles.details}>Name</Text>
          <Text style={styles.details2}>Jojon Suehdra</Text>
          <Text style={styles.details}>Desease</Text>
          <Text style={styles.details2}>Sore eyes</Text>
          <Text style={styles.details}>Location</Text>
          <Text style={styles.details2}>St.Broxlyn 212</Text>
          <Text style={styles.details}>Description</Text>
          <Text style={styles.details2}>
            Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, t. Ut enim
            ad veni am, quis nostrud
          </Text>
          <Text
            style={{
              color: "#07da5f",
              fontWeight: "bold",
              fontSize: 20,
              marginLeft: 25,
              marginTop: 40,
            }}
          >
            Doctor
          </Text>

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
              <View style={{ paddingLeft: 15 }}>
                <Text style={styles.name}>Name Surname</Text>
                <Text style={styles.speciality}>Eye Specialist</Text>
                <View style={{ flexDirection: "row", paddingTop: 8 }}>
                  <AntDesign
                    style={styles.star}
                    name="star"
                    size={23}
                    color="#FFDF00"
                  />
                  <AntDesign
                    style={styles.star}
                    name="star"
                    size={23}
                    color="#FFDF00"
                  />
                  <AntDesign
                    style={styles.star}
                    name="star"
                    size={23}
                    color="#FFDF00"
                  />
                  <AntDesign
                    style={styles.star}
                    name="star"
                    size={23}
                    color="#FFDF00"
                  />
                  <AntDesign
                    style={styles.star}
                    name="star"
                    size={23}
                    color="#FFDF00"
                  />
                  <Text
                    style={{ color: "gray", fontSize: 20, paddingLeft: 15 }}
                  >
                    4.9
                  </Text>
                </View>
              </View>
            </View>
          </Card>

          <TouchableOpacity
            style={{
              backgroundColor: "#07da5f",
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
              height: 50,
              width: 250,
              marginLeft: 70,
              marginTop: 50,
            }}
          >
            <Text style={{ fontSize: 20, color: "#fff" }}>Confirm</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "transparent",
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
              height: 50,
              width: 250,
              marginLeft: 70,
              marginTop: 30,
              marginBottom: 50,
            }}
          >
            <Text style={{ fontSize: 20, color: "gray" }}>Cancel Request</Text>
          </TouchableOpacity>
        </View>
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
  cerc: {
    marginLeft: 0,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    fontSize: 20,
    paddingTop: 20,
    paddingHorizontal: 90,
    textAlign: "center",
    fontWeight: "bold",
  },
  text2: {
    fontSize: 15,
    paddingTop: 20,
    paddingHorizontal: 40,
    textAlign: "center",
    color: "gray",
  },
  details: {
    fontSize: 17,
    marginLeft: 25,
    marginTop: -5,
    paddingTop: 20,
    fontWeight: "bold",
    color: "black",
  },
  details2: {
    fontSize: 17,
    marginLeft: 25,
    color: "gray",
  },
  speciality: {
    paddingTop: 8,
    fontStyle: "italic",
    color: "#07da5f",
    fontSize: 18,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
