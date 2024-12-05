import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import PersonalInfoCard from "@components/PersonalInfoCard";

const PersonalInfo = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Personal Info</Text>
      <PersonalInfoCard
        title="Legal name"
        text="John Doe"
        clickableText="Edit"
        onPress={() => console.log("Edit Legal Name")}
      />
      <PersonalInfoCard
        title="Preferred first name"
        text="N/A"
        clickableText="Add"
        onPress={() => console.log("Add Preferred Name")}
      />
      <PersonalInfoCard
        title="Phone number"
        text="(123) 456-7890"
        clickableText="Edit"
        onPress={() => console.log("Edit Phone Number")}
      />
      <PersonalInfoCard
        title="Email"
        text="johndoe@example.com"
        clickableText="Edit"
        onPress={() => console.log("Edit Email")}
      />
      <PersonalInfoCard
        title="Address"
        text="123 Main Street, Springfield, IL"
        clickableText="Edit"
        onPress={() => console.log("Edit Address")}
      />
      <PersonalInfoCard
        title="Emergency contact"
        text="Jane Doe - (987) 654-3210"
        clickableText="Edit"
        onPress={() => console.log("Edit Emergency Contact")}
      />
      <PersonalInfoCard
        title="Government ID"
        text="Driver's License"
        clickableText="Edit"
        onPress={() => console.log("Edit Government ID")}
      />
    </ScrollView>
  );
};

export default PersonalInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
});
