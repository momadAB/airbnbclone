import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import SettingsCard from "@components/SettingsCard";

const Profile = () => {
  const settings = [
    {
      iconName: "person-outline",
      text: "Personal information",
      onPress: () => console.log("Personal information pressed"),
    },
    {
      iconName: "lock-closed-outline",
      text: "Login & security",
      onPress: () => console.log("Login & security pressed"),
    },
    {
      iconName: "card-outline",
      text: "Payments and payouts",
      onPress: () => console.log("Payments and payouts pressed"),
    },
    {
      iconName: "eye-outline",
      text: "Accessibility",
      onPress: () => console.log("Accessibility pressed"),
    },
    {
      iconName: "file-tray-outline",
      text: "Taxes",
      onPress: () => console.log("Taxes pressed"),
    },
    {
      iconName: "language-outline",
      text: "Translation",
      onPress: () => console.log("Translation pressed"),
    },
    {
      iconName: "notifications-outline",
      text: "Notifications",
      onPress: () => console.log("Notifications pressed"),
    },
    {
      iconName: "shield-checkmark-outline",
      text: "Privacy and sharing",
      onPress: () => console.log("Privacy and sharing pressed"),
    },
    {
      iconName: "briefcase-outline",
      text: "Travel for work",
      onPress: () => console.log("Travel for work pressed"),
    },
  ];

  const hosting = [
    {
      iconName: "home-outline",
      text: "List your space",
      onPress: () => console.log("List your space pressed"),
    },
    {
      iconName: "book-outline",
      text: "Learn about hosting",
      onPress: () => console.log("Learn about hosting pressed"),
    },
    {
      iconName: "planet-outline",
      text: "Host an Experience",
      onPress: () => console.log("Host an Experience pressed"),
    },
  ];

  const support = [
    {
      iconName: "help-circle-outline",
      text: "Visit the Help Center",
      onPress: () => console.log("Visit the Help Center pressed"),
    },
    {
      iconName: "shield-outline",
      text: "Get help with a safety issue",
      onPress: () => console.log("Get help with a safety issue pressed"),
    },
    {
      iconName: "information-circle-outline",
      text: "How Airbnb works",
      onPress: () => console.log("How Airbnb works pressed"),
    },
    {
      iconName: "chatbubble-outline",
      text: "Give us feedback",
      onPress: () => console.log("Give us feedback pressed"),
    },
  ];

  const legal = [
    {
      iconName: "document-text-outline",
      text: "Terms of Service",
      onPress: () => console.log("Terms of Service pressed"),
    },
    {
      iconName: "shield-checkmark-outline",
      text: "Privacy Policy",
      onPress: () => console.log("Privacy Policy pressed"),
    },
    {
      iconName: "code-outline",
      text: "Open source licenses",
      onPress: () => console.log("Open source licenses pressed"),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header with Title and Bell Icon */}
      <View style={styles.header}>
        <Text style={styles.titleText}>Profile</Text>
        <TouchableOpacity>
          <Ionicons
            name="notifications-outline"
            size={24}
            color="black"
            style={styles.bellIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Profile Card */}
      <View style={styles.profileCard}>
        {/* Profile Picture */}
        <View style={styles.profilePicture}>
          <Text style={styles.profileInitial}>M</Text>
        </View>

        {/* Profile Details */}
        <View style={styles.profileDetails}>
          <Text style={styles.profileName}>Mohammad</Text>
          <TouchableOpacity>
            <View style={styles.profileAction}>
              <Text style={styles.showProfileText}>Show profile</Text>
              <Ionicons name="chevron-forward" size={18} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Separator */}
      <View style={styles.separator}></View>

      {/* Airbnb your home card */}
      <TouchableOpacity>
        <View style={styles.airbnbHomeCard}>
          <View style={styles.airbnbHomeTextContainer}>
            <Text style={styles.airbnbHomeText}>Airbnb your home</Text>
            <Text style={styles.airbnbHomeDescription}>
              It's easy to start hosting and earn extra income.
            </Text>
          </View>
          <Image
            source={require("assets/images/homegraphic.png")}
            style={styles.homeGraphic}
          />
        </View>
      </TouchableOpacity>

      {/* Separator */}
      <View style={styles.separator}></View>

      {/* Settings */}
      <View style={styles.header}>
        <Text style={styles.titleText}>Settings</Text>
      </View>
      {settings.map((setting, index) => (
        <SettingsCard
          key={index}
          iconName={setting.iconName}
          text={setting.text}
          onPress={setting.onPress}
        />
      ))}

      {/* Hosting */}
      <View style={styles.header}>
        <Text style={styles.titleText}>Hosting</Text>
      </View>
      {hosting.map((item, index) => (
        <SettingsCard
          key={index}
          iconName={item.iconName}
          text={item.text}
          onPress={item.onPress}
        />
      ))}

      {/* Support */}
      <View style={styles.header}>
        <Text style={styles.titleText}>Support</Text>
      </View>
      {support.map((item, index) => (
        <SettingsCard
          key={index}
          iconName={item.iconName}
          text={item.text}
          onPress={item.onPress}
        />
      ))}

      {/* Legal */}
      <View style={styles.header}>
        <Text style={styles.titleText}>Legal</Text>
      </View>
      {legal.map((item, index) => (
        <SettingsCard
          key={index}
          iconName={item.iconName}
          text={item.text}
          onPress={item.onPress}
        />
      ))}
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 30,
    paddingRight: 0,
    paddingBottom: 10,
  },
  titleText: {
    fontSize: 36,
    fontWeight: "400",
    color: "black",
  },
  bellIcon: {
    marginRight: 30,
  },
  separator: {
    alignSelf: "center",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    width: "85%",
    opacity: 0.3,
    marginBottom: 20,
  },
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "transparent",
    marginHorizontal: 20,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  profileInitial: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  profileDetails: {
    flex: 1,
    marginLeft: 15,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "600",
    color: "black",
  },
  profileAction: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  showProfileText: {
    fontSize: 14,
    color: "gray",
    marginRight: 5,
  },
  airbnbHomeCard: {
    padding: 20,
    marginHorizontal: 20,
    elevation: 3,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: "row",
  },
  airbnbHomeText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  airbnbHomeDescription: {
    fontSize: 14,
    color: "gray",
    marginTop: 5,
  },
  airbnbHomeTextContainer: {
    flex: 1,
  },
  homeGraphic: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
});
