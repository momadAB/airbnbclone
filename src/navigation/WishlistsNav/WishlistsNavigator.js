import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ROUTE from "@routes/index";
import Wishlists from "@screens/Wishlists/Wishlists";
import React from "react";

const Stack = createNativeStackNavigator();

const WishlistsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTE.TABPAGES.WISHLISTS}
      screenOptions={() => ({ headerShown: false })}
    >
      {/* <Stack.Screen name={ROUTE.TABPAGES.EXPLORE} component={} /> */}
      <Stack.Screen name={ROUTE.TABPAGES.WISHLISTS} component={Wishlists} />
      {/* <Stack.Screen name={ROUTE.TABPAGES.TRIPS} component={} />
      <Stack.Screen name={ROUTE.TABPAGES.MESSAGES} component={} />
      <Stack.Screen name={ROUTE.TABPAGES.PROFILE} component={} /> */}
    </Stack.Navigator>
  );
};

export default WishlistsNavigator;
