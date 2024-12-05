import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import WishlistList from "@components/WishlistList";

const Trips = [{}];

const Wishlists = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.wishlistText}>Wishlist</Text>
      <WishlistList />
    </View>
  );
};

export default Wishlists;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  wishlistText: {
    padding: 30,
    fontSize: 36,
    fontWeight: "400",
    color: "black",
  },
});
