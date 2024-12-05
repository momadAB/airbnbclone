import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconCard = ({ iconName, text, onPress }) => {
  return (
    <View>
      <TouchableOpacity style={styles.card} onPress={onPress}>
        {/* Icon on the left */}
        <Ionicons name={iconName} size={24} color="black" style={styles.icon} />

        {/* Text in the middle */}
        <Text style={styles.text}>{text}</Text>

        {/* Caret on the far right */}
        <Ionicons
          name="chevron-forward"
          size={18}
          color="black"
          style={styles.caret}
        />
      </TouchableOpacity>
      <View style={styles.separator}></View>
    </View>
  );
};

export default IconCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    padding: 5,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 8,
    marginVertical: 8,
  },
  icon: {
    marginRight: 15,
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: "black",
  },
  separator: {
    alignSelf: "center",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    width: "85%",
    opacity: 0.3,
  },
  caret: {
    marginLeft: 10,
  },
});
