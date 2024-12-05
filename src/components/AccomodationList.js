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
  {
    id: "2",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/401026827.jpg?k=e6bbcdecd9d5e4b363d3c320695c288dd94d846b963c4bbfd5627c925b2b9ea9&o=&hp=1",
    title: "Luxury Villa with Ocean View",
    type: "Entire villa",
    price: 350,
    rating: 4.9,
    reviewsNumber: 85,
    description:
      "Stunning villa overlooking the ocean with private beach access.",
    location: "Coastal Drive, Beachtown",
    distance: "8,390 km away",
    availabilityDate: "Jan 2 - 13",
  },
  {
    id: "3",
    image:
      "https://s3.amazonaws.com/finegardening.s3.tauntoncloud.com/app/uploads/2018/01/23163117/terie-rawn-2.jpg",
    title: "Charming Cottage in the Woods",
    type: "Entire cottage",
    price: 95,
    rating: 4.7,
    reviewsNumber: 62,
    description:
      "Quaint cottage surrounded by nature, perfect for a peaceful getaway.",
    location: "Forest Lane, Woodland",
    distance: "6,789 km away",
    availabilityDate: "Feb 22 - 27",
  },
];

const AccommodationList = () => {
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

export default AccommodationList;
