import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import ROUTE from "@routes/index";

import { useTrip } from "@context/TripsContext";

const TripItem = ({ accommodation }) => {
  const navigation = useNavigation();

  const { removeTrip } = useTrip();

  const handleViewDetails = () => {
    // Navigate to parent of current navigator, go to ROUTE.NAVNAME.EXPLORENAV, then ROUTE.EXPLOREPAGES.DETAILPAGE
    navigation.navigate(ROUTE.NAVNAME.EXPLORENAV, {
      screen: ROUTE.EXPLOREPAGES.DETAILPAGE,
      params: { accommodation },
    });
  };

  const handleRemoveTrip = () => {
    // Confirm before removing the trip
    Alert.alert("Remove Trip", "Are you sure you want to remove this trip?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Remove",
        style: "destructive",
        onPress: () => removeTrip(accommodation.id),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleViewDetails}>
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

        {/* Remove Trip Button */}
        <TouchableOpacity
          style={styles.removeButton}
          onPress={handleRemoveTrip}
        >
          <Text style={styles.removeButtonText}>Remove Trip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 250,
  },
  infoContainer: {
    padding: 10,
  },
  location: {
    fontSize: 16,
    fontWeight: "bold",
  },
  locationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    alignItems: "center",
  },
  rating: {
    marginLeft: 4,
    fontSize: 14,
    color: "#484848",
  },
  price: {
    fontSize: 16,
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
    alignItems: "center",
    marginTop: 10,
  },
  removeButton: {
    marginTop: 15,
    paddingVertical: 10,
    backgroundColor: "#FF6F61",
    borderRadius: 5,
    alignItems: "center",
  },
  removeButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default TripItem;
