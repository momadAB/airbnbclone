import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ROUTE from "@routes/index";
import PersonalInfo from "@screens/Profile/PersonalInfo";
import Profile from "@screens/Profile/Profile";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTE.TABPAGES.PROFILE}
      screenOptions={() => ({ headerShown: false })}
    >
      {/* <Stack.Screen name={ROUTE.TABPAGES.EXPLORE} component={} />
      <Stack.Screen name={ROUTE.TABPAGES.WISHLISTS} component={} />
      <Stack.Screen name={ROUTE.TABPAGES.TRIPS} component={} />
      <Stack.Screen name={ROUTE.TABPAGES.MESSAGES} component={} /> */}
      <Stack.Screen name={ROUTE.TABPAGES.PROFILE} component={Profile} />
      <Stack.Screen
        name={ROUTE.PROFILEPAGES.PERSONALINFO}
        component={PersonalInfo}
        options={({ navigation }) => ({
          headerShown: true,
          headerTitle: "", // Empty title
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
