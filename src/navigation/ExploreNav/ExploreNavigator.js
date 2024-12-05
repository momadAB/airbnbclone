import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ROUTE from "@routes/index";
import AccommodationDetailPage from "@screens/Explore/AccomodationDetailPage";
import Explore from "@screens/Explore/Explore";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const ExploreNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTE.TABPAGES.EXPLORE}
      screenOptions={() => ({ headerShown: false })}
    >
      <Stack.Screen name={ROUTE.TABPAGES.EXPLORE} component={Explore} />
      <Stack.Screen
        name={ROUTE.EXPLOREPAGES.DETAILPAGE}
        options={({ navigation }) => ({
          headerShown: true,
          headerTitle: "", // Empty title
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
        component={AccommodationDetailPage}
      />
      {/* <Stack.Screen name={ROUTE.TABPAGES.WISHLISTS} component={} />
      <Stack.Screen name={ROUTE.TABPAGES.TRIPS} component={} />
      <Stack.Screen name={ROUTE.TABPAGES.MESSAGES} component={} />
      <Stack.Screen name={ROUTE.TABPAGES.PROFILE} component={} /> */}
    </Stack.Navigator>
  );
};

export default ExploreNavigator;
