import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ROUTE from "@routes/index";
import Profile from "@screens/Profile/Profile";
import React from "react";

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
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
