import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

const AccommodationItem = ({ accommodation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={{ uri: accommodation.image }} style={styles.image} />
      </TouchableOpacity>

      <View style={styles.infoContainer}>
        <View style={styles.locationContainer}>
          <Text style={styles.location}>{accommodation.location}</Text>
          <View style={styles.ratingContainer}>
            <Entypo name="star" size={15} color="black" marginTop={2} />
            <Text style={styles.rating}>{accommodation.rating}</Text>
          </View>
        </View>
        <Text style={styles.distance}>{accommodation.distance}</Text>
        <Text style={styles.availability}>
          {accommodation.availabilityDate}
        </Text>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>${accommodation.price}</Text>
          <Text style={styles.night}>night</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 10,
  },
  infoContainer: {
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#484848",
    marginBottom: 4,
  },
  type: {
    fontSize: 14,
    color: "#767676",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#484848",
    marginBottom: 4,
  },
  location: {
    fontSize: 16,
    fontWeight: "bold",
  },
  locationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  distance: {
    fontSize: 14,
    color: "#767676",
  },
  availability: {
    fontSize: 14,
    color: "#767676",
  },
  ratingContainer: {
    flexDirection: "row",
    marginBottom: 4,
  },
  rating: {
    marginLeft: 4,
    fontSize: 14,
    color: "#484848",
  },
  reviewsNumber: {
    marginLeft: 4,
    fontSize: 14,
    color: "#767676",
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#484848",
  },
  night: {
    fontSize: 14,
    color: "#767676",
    marginLeft: 4,
  },
  priceContainer: {
    flexDirection: "row",
  },
});

export default AccommodationItem;
