import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "@navigation/MainNav/MainNavigator";

export default function App() {
  // Set defaultProps for Text
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.style = {
    fontFamily: Platform.OS === "ios" ? "Georgia" : "NotoSerif",
  };

  // Set defaultProps for TextInput
  TextInput.defaultProps = TextInput.defaultProps || {};
  TextInput.defaultProps.style = {
    fontFamily: Platform.OS === "ios" ? "Georgia" : "NotoSerif",
  };

  return (
    <NavigationContainer style={{ backgroundColor: "white" }}>
      <SafeAreaView style={styles.container}>
        <MainNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
  r;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
