import ExploreNavigator from "@navigation/ExploreNav/ExploreNavigator";
import MessagesNavigator from "@navigation/MessagesNav/MessagesNavigator";
import ProfileNavigator from "@navigation/ProfileNav/ProfileNavigator";
import TripsNavigator from "@navigation/TripsNav/TripsNavigator";
import WishlistsNavigator from "@navigation/WishlistsNav/WishlistsNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Explore"
      screenOptions={({ route }) => ({
        headerShown: false,
        cardStyle: { backgroundColor: "#FFFFFF" },
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === "Trips") {
            return (
              <Image
                source={require("assets/images/airbnb.png")}
                style={{
                  width: 24,
                  height: 24,
                  resizeMode: "contain",
                  tintColor: focused ? "#FF385C" : "gray",
                }}
              />
            );
          }

          let iconName;

          switch (route.name) {
            case "Explore":
              iconName = "search";
              break;
            case "Wishlists":
              iconName = "heart";
              break;
            case "Messages":
              iconName = "chatbox-ellipses";
              break;
            case "Profile":
              iconName = "person";
              break;
            default:
              iconName = "help-circle";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#FF385C", // Airbnb's primary color
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name={"Explore"} component={ExploreNavigator} />
      <Tab.Screen name={"Wishlists"} component={WishlistsNavigator} />
      <Tab.Screen name={"Trips"} component={TripsNavigator} />
      <Tab.Screen name={"Messages"} component={MessagesNavigator} />
      <Tab.Screen name={"Profile"} component={ProfileNavigator} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
