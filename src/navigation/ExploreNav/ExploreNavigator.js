import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ROUTE from "@routes/index";
import Explore from "@screens/Explore/Explore";
import React from "react";

const Stack = createNativeStackNavigator();

const ExploreNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTE.TABPAGES.EXPLORE}
      screenOptions={() => ({ headerShown: false })}
    >
      <Stack.Screen name={ROUTE.TABPAGES.EXPLORE} component={Explore} />
      {/* <Stack.Screen name={ROUTE.TABPAGES.WISHLISTS} component={} />
      <Stack.Screen name={ROUTE.TABPAGES.TRIPS} component={} />
      <Stack.Screen name={ROUTE.TABPAGES.MESSAGES} component={} />
      <Stack.Screen name={ROUTE.TABPAGES.PROFILE} component={} /> */}
    </Stack.Navigator>
  );
};

export default ExploreNavigator;
