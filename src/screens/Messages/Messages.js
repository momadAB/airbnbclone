import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const messages = [];

const Messages = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleText}>Messages</Text>
        <View style={styles.queryCard}>
          {["All", "Traveling", "Support"].map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[
                styles.filterButton,
                selectedFilter === filter && styles.selectedButton,
              ]}
              onPress={() => setSelectedFilter(filter)}
            >
              <Text
                style={[
                  styles.filterText,
                  selectedFilter === filter && styles.selectedText,
                ]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      {/* If messages are empty */}
      {messages.length === 0 && (
        <View style={styles.emptyMessagesContainer}>
          <Ionicons name="chatbubble-outline" size={30} color="black" />
          <Text style={styles.emptyMessagesTitleText}>
            You don't have any messages.
          </Text>
          <Text style={styles.emptyMessagesText}>
            When you receive a new message, it will appear here.
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    padding: 30,
    paddingRight: 0,
    paddingBottom: 10,
  },
  titleText: {
    fontSize: 36,
    fontWeight: "400",
    color: "black",
  },
  queryCard: {
    flexDirection: "row",
    marginTop: 10,
  },
  filterButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "#f8f8f8",
    marginRight: 10,
  },
  selectedButton: {
    backgroundColor: "black",
  },
  filterText: {
    fontSize: 16,
    color: "black",
  },
  selectedText: {
    color: "white",
    fontWeight: "bold",
  },
  emptyMessagesContainer: {
    flex: 1,
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  emptyMessagesTitleText: {
    fontSize: 20,
    fontWeight: "300",
    color: "black",
    textAlign: "center",
  },
  emptyMessagesText: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
  },
});
