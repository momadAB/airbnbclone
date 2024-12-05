import React from "react";
import { ScrollView, Text, TouchableOpacity, StyleSheet } from "react-native";

const filters = [
  "Icons",
  "Design",
  "Islands",
  "OMG!",
  "Mansions",
  "Earth homes",
  "Amazing views",
  "Farms",
  "Top cities",
  "Trending",
  "Countryside",
  "Castles",
];

const Filters = () => {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
    >
      {filters.map((filter, index) => (
        <TouchableOpacity key={index} style={styles.filterButton}>
          <Text style={styles.filterText}>{filter}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 30,
    marginRight: 8,
  },
  filterText: {
    fontSize: 14,
    color: "#484848",
  },
});

export default Filters;
