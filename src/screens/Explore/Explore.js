import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import SearchBar from "@components/SearchBar";
import Filters from "@components/Filters";
import AccommodationList from "@components/AccomodationList";

const Explore = () => {
  const renderItem = ({ item }) => {
    if (item.type === "header") return <SearchBar />;
    if (item.type === "filters") return <Filters />;
    if (item.type === "accommodations") return <AccommodationList />;
    return null;
  };

  const data = [
    { id: "header", type: "header" },
    { id: "filters", type: "filters" },
    { id: "accommodations", type: "accommodations" },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        stickyHeaderIndices={[0, 1]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Explore;
