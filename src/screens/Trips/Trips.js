import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const tripsData = [];

const Trips = () => {
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
        <TouchableOpacity>
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
    </View>
  );
};

export default Trips;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
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
