import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PersonalInfoCard = ({ title, text, clickableText, onPress }) => {
  return (
    <View>
      <View style={styles.card}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{text}</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.clickableText}>{clickableText}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.separator}></View>
    </View>
  );
};

export default PersonalInfoCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 8,
    marginVertical: 8,
  },
  icon: {
    marginRight: 15,
  },
  title: {
    flex: 1,
    fontSize: 16,
    color: "black",
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: "grey",
  },
  clickableText: {
    color: "black",
    // underline
    fontSize: 16,
    fontWeight: 400,
    textDecorationLine: "underline",
  },
  separator: {
    alignSelf: "center",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    width: "95%",
    opacity: 0.3,
  },
  caret: {
    marginLeft: 10,
  },
});
