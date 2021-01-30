import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

export default function ContactScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", paddingLeft: 20 }}>
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
            <Text style={styles.name}>Name Surname</Text>
            <Text style={styles.speciality}>Eye Specialist</Text>
            <View style={{ flexDirection: "row" }}>
              <AntDesign
                style={styles.star}
                name="star"
                size={24}
                color="#FFDF00"
              />
              <AntDesign
                style={styles.star}
                name="star"
                size={24}
                color="#FFDF00"
              />
              <AntDesign
                style={styles.star}
                name="star"
                size={24}
                color="#FFDF00"
              />
              <AntDesign
                style={styles.star}
                name="star"
                size={24}
                color="#FFDF00"
              />
              <AntDesign
                style={styles.star}
                name="star"
                size={24}
                color="#FFDF00"
              />
              <Text style={styles.rating}>4.9</Text>
            </View>
          </View>
        </View>

        <View style={styles.line}>
          <View
            style={{
              flex: 1,
              marginLeft: 20,
              height: 0.1,
              backgroundColor: "#858585",
            }}
          />
        </View>

        <Text style={styles.text}>Short Description</Text>

        <Text numberOfLines={3} style={styles.description}>
          Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, t. Ut enim
          ad veni am, quis nostrud exercitation ullamcov
        </Text>

        <Text style={styles.text}>Location</Text>

        <View style={styles.location}>
          <EvilIcons name="location" size={30} color="gray" />
          <Text style={{ color: "gray", fontSize: 18 }}>St.Bronxlyn 212</Text>
        </View>

        <MapView
          style={styles.mapStyle}
          region={{
            latitude: 46.999,
            longitude: 28.8078,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          }}
        >
          <Marker coordinate={{ latitude: 46.999, longitude: 28.8087 }} />
        </MapView>
        <TouchableOpacity style={styles.button}>
          <Text style={{ fontSize: 20, color: "#fff" }}>Request</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  name: {
    margin: 5,
    fontSize: 17,
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
    marginLeft: 6,
    fontStyle: "italic",
    color: "#07da5f",
    fontSize: 15,
  },
  location: {
    flexDirection: "row",
    marginLeft: 15,
    marginTop: 20,
  },
  line: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 30,
    width: 375,
  },
  text: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 1,
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    fontSize: 18,
    color: "grey",
    textAlign: "center",
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 50,
    textAlign: "left",
  },
  mapStyle: {
    marginTop: 30,
    width: Dimensions.get("window").width,
    height: 350,
  },
  button: {
    backgroundColor: "#07da5f",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    width: 300,
    marginTop: 45,
    borderWidth: 1,
    borderColor: "#07da5f",
    marginHorizontal: 45,
    marginBottom: 30,
  },
});
