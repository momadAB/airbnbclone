import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ROUTE from "@routes/index";
import Trips from "@screens/Trips/Trips";
import React from "react";

const Stack = createNativeStackNavigator();

const TripsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTE.TABPAGES.TRIPS}
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      {/* <Stack.Screen name={ROUTE.TABPAGES.EXPLORE} component={} />
      <Stack.Screen name={ROUTE.TABPAGES.WISHLISTS} component={} /> */}
      <Stack.Screen name={ROUTE.TABPAGES.TRIPS} component={Trips} />
      {/* <Stack.Screen name={ROUTE.TABPAGES.MESSAGES} component={} />
      <Stack.Screen name={ROUTE.TABPAGES.PROFILE} component={} /> */}
    </Stack.Navigator>
  );
};

export default TripsNavigator;
