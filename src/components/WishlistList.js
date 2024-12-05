import { View, FlatList, StyleSheet } from "react-native";
import AccommodationItem from "@components/AccomodationItem";
const accommodations = [
  {
    id: "1",
    image:
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1142048721696770947/original/e4571cf9-b8cf-4cfa-bcac-77b45dd453c2.png?im_w=960&im_format=avif",
    title: "Cozy Apartment in Downtown",
    type: "Entire apartment",
    price: 120,
    rating: 4.8,
    reviewsNumber: 120,
    description: "Beautiful and cozy apartment in the heart of the city.",
    location: "Downtown, Metropolis",
    distance: "2,562 km away",
    availabilityDate: "Dec 27 -  31",
  },
];

const WishlistList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={accommodations}
        renderItem={({ item }) => <AccommodationItem accommodation={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
});

export default WishlistList;
