import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Feather } from "@expo/vector-icons";

const ProfileCard = () => {
  const host = {
    name: "Paivi",
    image: "https://via.placeholder.com/150",
    joinDate: "January 2018",
    reviewCount: 324,
    rating: 5.0,
    responseRate: 100,
    responseTime: "within an hour",
    languages: ["English", "Spanish", "French"],
    location: "New York, United States",
    about:
      "Hi, I'm John! I've been hosting on Airbnb for over 5 years and love meeting people from all around the world. I'm passionate about travel, food, and photography. I'm always happy to share local tips and make sure my guests have a comfortable stay.",
    confirmedInfo: ["Identity", "Email address", "Phone number"],
    listings: [
      {
        id: "1",
        title: "Cozy Apartment in Downtown",
        image:
          "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1142048721696770947/original/e4571cf9-b8cf-4cfa-bcac-77b45dd453c2.png?im_w=960&im_format=avif",
      },
      {
        id: "2",
        title: "Spacious Loft with City View",
        image:
          "https://img.freepik.com/premium-photo/spacious-loft-apartment-with-city-view_1302551-9719.jpg",
      },
    ],
    reviews: [
      {
        id: "1",
        author: "Alice",
        date: "August 2023",
        content:
          "John was an excellent host! The apartment was clean and exactly as described. He was very responsive and provided great local recommendations.",
      },
      {
        id: "2",
        author: "Bob",
        date: "July 2023",
        content:
          "We had a wonderful stay at John's place. He was very accommodating and the location was perfect for exploring the city.",
      },
    ],
  };
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <View style={styles.card}>
        <View style={styles.header}>
          <Image
            source={{
              uri: "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg",
            }}
            style={styles.profileImage}
          />
          <Text style={styles.name}>{host.name}</Text>
          <Text style={styles.role}>Host</Text>
        </View>
        <View style={styles.stats}>
          <Text style={styles.stat}>7 </Text>
          <Text style={{ fontSize: 10 }}>Reviews</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.stat}>5.0 </Text>
            <Entypo name="star" size={15} color="black" marginTop={4} />
          </View>
          <Text style={{ fontSize: 10 }}>Rating</Text>
          <Text style={styles.stat}>5 </Text>
          <Text style={{ fontSize: 10 }}>Years hosting</Text>
        </View>
      </View>
      <View style={styles.languages}>
        <View style={{ flexDirection: "row", marginLeft: 5 }}>
          <Ionicons
            name="language-outline"
            size={20}
            color="black"
            marginTop={10}
          />
          <Text style={styles.language}>
            Speaks: Dutch, English, French, German, Greek, and Spanish
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginLeft: 5 }}>
        <MaterialIcons name="language" size={20} color="black" />
        <Text style={styles.location}>Lives in Uccle, Belgium</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>John's confirmed information</Text>
        {host.confirmedInfo.map((info, index) => (
          <View key={index} style={styles.confirmedItem}>
            <Feather name="check" size={20} color="#008489" />
            <Text style={styles.confirmedText}>{info}</Text>
          </View>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          John's listings ({host.listings.length})
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {host.listings.map((listing) => (
            <View key={listing.id} style={styles.listingItem}>
              <Image
                source={{ uri: listing.image }}
                style={styles.listingImage}
              />
              <Text style={styles.listingTitle}>{listing.title}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  card: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
    marginTop: 20,
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
    marginLeft: "5%",
    justifyContent: "space-around",
  },
  header: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 15,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  role: {
    fontSize: 14,
    color: "gray",
  },
  stat: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
  },
  languages: {
    marginBottom: 10,
  },
  language: {
    fontSize: 14,
    marginLeft: 10,
  },
  location: {
    fontSize: 14,
    marginLeft: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#EBEBEB",
    marginVertical: 16,
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBEB",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#484848",
  },
  listingItem: {
    marginRight: 10,
  },
  listingImage: {
    width: 150,
    height: 100,
    borderRadius: 5,
    marginBottom: 5,
  },
  listingTitle: {
    fontSize: 14,
    color: "#484848",
  },
  confirmedItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  confirmedText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#484848",
  },
});

export default ProfileCard;
