import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Button,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const { width } = Dimensions.get("window");

const AccommodationDetailPage = ({ route }) => {
  const { accommodation } = route.params;
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  // const accommodation = {
  //   id: "1",
  //   image:
  //     "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1142048721696770947/original/e4571cf9-b8cf-4cfa-bcac-77b45dd453c2.png?im_w=960&im_format=avif",
  //   title: "Cozy Apartment in Downtown",
  //   type: "Entire apartment",
  //   price: 120,
  //   rating: 4.8,
  //   reviewsNumber: 120,
  //   description:
  //     "Beautiful and cozy apartment in the heart of the city. Perfect for a peaceful getaway.",
  //   location: "Downtown, Metropolis",
  //   distance: "2,562 km away",
  //   availabilityDate: "Dec 27 -  31",
  // };
  const renter = {
    id: "1",
    name: "John Doe",
    reviews: 150,
    rating: 4.9,
    yearsOfHosting: 5,
    description:
      "Friendly and experienced host with a passion for hospitality.",
    location: "Downtown, Metropolis",
    languages: ["English", "Spanish"],
    livesIn: "Metropolis",
    work: "Software Engineer",
    profilePicture:
      "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg",
  };

  return (
    // FIRST SECTION
    <ScrollView style={styles.container}>
      <Image source={{ uri: accommodation.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{accommodation.title}</Text>
        <Text style={styles.location}>
          {accommodation.type} in {accommodation.location}
        </Text>
        <View style={styles.roomDetails}>
          <Text style={styles.guests}>4 guests • </Text>
          <Text style={styles.bedrooms}>2 beds • </Text>
          <Text style={styles.bathrooms}>1 bath</Text>
        </View>

        <View style={styles.ratingContainer}>
          <Entypo name="star" size={15} color="black" marginTop={2} />
          <Text style={styles.rating}>{accommodation.rating} •</Text>
          <Text style={styles.reviewsNumber}>
            {accommodation.reviewsNumber} reviews
          </Text>
        </View>

        <View style={styles.divider} />

        {/* SECOND SECTION (HOST INFO) */}
        <View style={{ flexDirection: "row" }}>
          <Image
            source={{ uri: renter.profilePicture }}
            style={styles.hostImage}
          />
          <View style={styles.hostYear}>
            <Text style={styles.hostTitle}>Hosted By {renter.name}</Text>
            <Text style={styles.hostYear}>
              {renter.yearsOfHosting} years hosting
            </Text>
          </View>
        </View>

        <View style={styles.divider} />

        {/* THIRD SECTION (DESCRIPTION) */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            {showFullDescription
              ? accommodation.description
              : `${accommodation.description.slice(0, 100)}...`}
          </Text>
          <TouchableOpacity onPress={toggleDescription}>
            <Text style={styles.showMoreLess}>
              {showFullDescription ? "Show less" : "Show more"}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />

        {/* FOURTH SECTION (WHERE YOULL SLEEP) */}
        <View style={styles.sleep}>
          <Text style={styles.sectionTitle}>Where you'll sleep</Text>
          <View style={styles.bedroomsCombined}>
            <View style={styles.bedrooms}>
              <Image
                source={{
                  uri: "https://www.belledorm.co.uk/cms_media/images/hotel_look_21.jpg",
                }}
                style={styles.bed}
              />
              <Text style={styles.sleeptext}>Bedroom 1</Text>
              <Text style={styles.sleeptext}>1 double bed</Text>
            </View>

            <View style={styles.bedrooms}>
              <Image
                source={{
                  uri: "https://www.shopmarriott.com/images/products/v2/xlrg/Marriott-birds-eye-stripe-bed-bedding-set-MAR-101-BE-BP_2_xlrg.jpg",
                }}
                style={styles.bed}
              />
              <Text style={styles.sleeptext}>Bedroom 2</Text>
              <Text style={styles.sleeptext}>1 double bed</Text>
            </View>
          </View>
        </View>

        <View style={styles.divider} />
        {/* FIFTH SECTION (AMENITIES) */}
        <View style={styles.amenities}>
          <Text style={styles.sectionTitle}>What this place offers</Text>
          <View style={styles.amenityItem}>
            <Feather name="wifi" size={24} color="#484848" />
            <Text style={styles.amenityText}>Wifi</Text>
          </View>
          <View style={styles.amenityItem}>
            <AntDesign name="car" size={24} color="black" />
            <Text style={styles.amenityText}>Free parking on premises</Text>
          </View>
          <View style={styles.amenityItem}>
            <Feather name="tv" size={24} color="#484848" />
            <Text style={styles.amenityText}>TV</Text>
          </View>
          <View style={styles.amenityItem}>
            <FontAwesome name="snowflake-o" size={24} color="black" />
            <Text style={styles.amenityText}>Central air conditioning</Text>
          </View>
          <TouchableOpacity style={styles.showAllAmenities}>
            <Text style={styles.showAllAmenitiesText}>Show all amenities</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divider} />

        <View style={styles.container}>
          {/* Header */}
          <Text style={styles.header}>Meet your Host</Text>

          {/* Host Section */}
          <View style={styles.hostContainer}>
            <View style={{ marginLeft: 10 }}>
              <Image
                source={{ uri: renter.profilePicture }}
                style={styles.profileImage}
              />
              <Text style={styles.hostName}>Paivi</Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                marginTop: 10,
                marginLeft: 70,
              }}
            >
              <Text style={styles.reviews}>7 Reviews</Text>
              <Text style={styles.rating}>5.0 ⭐ Rating</Text>
              <Text style={styles.hosting}>5 Months hosting</Text>
            </View>
          </View>

          {/* Host Details */}
          <View style={styles.detailsContainer}>
            <Text style={styles.language}>
              Speaks English, Finnish, and Swedish
            </Text>
            <Text style={styles.location}>Lives in Espoo, Finland</Text>
            <Text style={{ marginTop: 10, fontSize: 16 }}>Host details</Text>
            <Text style={styles.response}>Response rate: 100%</Text>
            <Text style={styles.response}>Responds within a few hours</Text>
          </View>

          {/* Actions */}

          <TouchableOpacity onPress={() => {}}>
            <Text
              style={{
                color: "white",
                backgroundColor: "black",
                padding: 12,
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                borderRadius: 8,
                width: 120,
                fontSize: 12,
              }}
            >
              Message Host
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />

        {/* SIXTH SECTION (ACCESSIBILITY) */}
        <View style={styles.accessibility}>
          <Text style={styles.sectionTitle}>Accessibility features</Text>
          <Text style={styles.accessibilityText}>
            This info was provided by the Host and reviewed by Airbnb.
          </Text>
          <TouchableOpacity style={styles.showAllAmenities}>
            <Text style={styles.showAllAmenitiesText}>
              Show all feature details
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />
        {/* SEVENTH SECTION AVAILABILITY */}
        <TouchableOpacity>
          <View style={styles.availability}>
            <Text style={styles.sectionTitle}>Availability</Text>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.availabilityText}>
                {accommodation.availabilityDate}
              </Text>
              <MaterialIcons name="arrow-forward-ios" size={16} color="black" />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.divider} />
        {/* EIGHTH SECTION CANCELLATION  */}
        <TouchableOpacity>
          <View style={styles.availability}>
            <Text style={styles.sectionTitle}>Cancellation Policy</Text>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.availabilityText}>
                Free cancellation before Jul 5. Cancel before Jul 28 for a
                partial refund.
              </Text>
              <MaterialIcons name="arrow-forward-ios" size={16} color="black" />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.divider} />

        {/* Price */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={styles.priceContainer2}>
            <Text style={styles.price}>$252 night</Text>
            <Text style={styles.cancellation}>Free cancellation</Text>
          </View>

          <View style={styles.reserveButton}>
            <TouchableOpacity onPress={() => {}}>
              <Text
                style={{
                  color: "white",
                  backgroundColor: "#ff3366",
                  padding: 8,
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  borderRadius: 8,
                }}
              >
                Reserve
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bed: {
    width: 150,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  sleeptext: {
    fontSize: 14,
    marginTop: 10,
  },
  bedroomsCombined: {
    flexDirection: "row",
  },
  availabilityArrow: {
    flexDirection: "column-reverse",
    // justifyContent: "space-between",
  },
  image: {
    width: width,
    height: 300,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "500",
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  rating: {
    marginLeft: 4,
    fontSize: 12,
    fontWeight: "bold",
    color: "#484848",
  },
  reviewsNumber: {
    marginLeft: 4,
    fontSize: 12,
    color: "#484848",
    textDecorationLine: "underline",
  },
  location: {
    fontSize: 14,
    color: "#484848",
    fontWeight: "bold",
    marginBottom: 2,
  },
  distance: {
    fontSize: 14,
    color: "#767676",
    marginBottom: 4,
  },
  availabilityDate: {
    fontSize: 14,
    color: "#767676",
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: "#EBEBEB",
    marginVertical: 16,
  },

  hostTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 8,
  },
  hostImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  details: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 16,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
    marginBottom: 16,
  },
  detailText: {
    marginLeft: 8,
    fontSize: 16,
    color: "#484848",
  },
  descriptionContainer: {
    marginBottom: 16,
  },
  descriptionText: {
    fontSize: 16,
    color: "#484848",
    lineHeight: 24,
  },
  showMoreLess: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  amenities: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#484848",
    marginBottom: 16,
  },
  amenityItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  amenityText: {
    marginLeft: 8,
    fontSize: 16,
    color: "#484848",
  },
  showAllAmenities: {
    marginTop: 8,
    borderRadius: 8,
    borderColor: "grey",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  showAllAmenitiesText: {
    fontSize: 14,
    fontWeight: "600",
    padding: 8,
  },
  availability: {
    marginBottom: 12,
  },
  availabilityText: {
    fontSize: 14,
    color: "#484848",
    marginRight: 5,
  },
  calendarButton: {
    backgroundColor: "#FF5A5F",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  calendarButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: 16,
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#484848",
  },
  pricePerNight: {
    fontSize: 16,
    color: "#484848",
    marginLeft: 4,
  },
  roomDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  guests: {
    fontSize: 12,
    color: "#484848",
  },
  bedrooms: {
    fontSize: 12,
    color: "#484848",
    marginRight: 4,
  },
  bathrooms: {
    fontSize: 12,
    color: "#484848",
  },
  hostYear: {
    marginLeft: 8,
    color: "#484848",
    fontSize: 12,
  },
  accessibilityText: {
    fontSize: 13,
    color: "#484848",
    marginBottom: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
  },
  hostContainer: {
    flexDirection: "row",
    marginBottom: 20,
    marginRight: 20,
    // borderColor: "lightgray",
    // borderRadius: 20,
    // overflow: "hidden",
    padding: 10,
    width: "auto",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 1,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },

  hostName: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 6,
  },
  reviews: {
    fontSize: 14,
    color: "gray",
  },
  rating: {
    fontSize: 14,
    color: "gray",
  },
  hosting: {
    fontSize: 14,
    color: "gray",
  },
  detailsContainer: {
    marginVertical: 10,
  },
  language: {
    fontSize: 14,
    marginBottom: 10,
  },
  location: {
    fontSize: 14,
    marginBottom: 10,
  },
  response: {
    marginTop: 4,
    fontSize: 14,
    color: "gray",
  },
  actionContainer: {
    marginVertical: 10,
    width: 100,
    fontSize: 12,
  },
  priceContainer2: {
    marginVertical: 20,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cancellation: {
    fontSize: 14,
    color: "gray",
  },
  reserveButton: {
    marginTop: 20,
    width: 100,
  },
});

export default AccommodationDetailPage;
