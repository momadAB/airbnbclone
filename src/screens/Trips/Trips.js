import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import ROUTE from "@routes/index";
import { useNavigation } from "@react-navigation/native";

import { useTrip } from "@context/TripsContext";
import AccommodationItem from "@components/AccomodationItem";
import TripItem from "@components/TripItem";

const Trips = () => {
  const navigation = useNavigation();

  const { trips } = useTrip();

  const tripsData = trips;

  const handleGoToExplore = (e) => {
    navigation.getParent().navigate(ROUTE.NAVNAME.EXPLORENAV);
  };

  if (tripsData.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.tripsTitleText}>Trips</Text>
        {/* Separator */}
        <View style={styles.separator}></View>
        <Text style={styles.noTripsBookedText}>No trips booked...yet!</Text>
        <Text style={styles.paragraphText}>
          Time to dust off your bags and start planning your next adventure.
        </Text>
        <TouchableOpacity onPress={handleGoToExplore}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Start searching</Text>
          </View>
        </TouchableOpacity>
        {/* Separator */}
        <View style={styles.separator}></View>
        <Text style={styles.subText}>Can't find your reservation here?</Text>
        <TouchableOpacity>
          <Text style={styles.visitLink}>Visit the Help Center</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.tripsTitleText}>Trips</Text>
      {/* Separator */}
      <View style={styles.separator}></View>
      <FlatList
        data={tripsData}
        renderItem={({ item }) => <TripItem accommodation={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Trips;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 16,
  },
  tripsTitleText: {
    padding: 30,
    paddingBottom: 10,
    fontSize: 36,
    fontWeight: "400",
    color: "black",
  },
  separator: {
    alignSelf: "center",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    width: "85%",
    opacity: 0.3,
    marginBottom: 20,
  },
  noTripsBookedText: {
    padding: 30,
    paddingBottom: 10,
    fontSize: 24,
    fontWeight: "400",
    color: "black",
  },
  paragraphText: {
    paddingLeft: 30,
    paddingRight: 30,
    fontSize: 18,
    color: "black",
  },
  button: {
    alignSelf: "flex-start",
    margin: 30,
    backgroundColor: "transparent",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "lightgrey",
  },
  buttonText: {
    color: "black",
    fontSize: 18,
  },
  subText: {
    color: "black",
    fontSize: 18,
    fontWeight: 200,
    marginLeft: 30,
  },
  visitLink: {
    color: "black",
    textDecorationLine: "underline",
    fontSize: 18,
    fontWeight: 200,
    marginLeft: 30,
  },
});
