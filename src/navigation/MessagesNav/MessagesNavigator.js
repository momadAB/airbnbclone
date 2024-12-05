import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ROUTE from "@routes/index";
import Messages from "@screens/Messages/Messages";
import React from "react";

const Stack = createNativeStackNavigator();

const MessagesNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTE.TABPAGES.MESSAGES}
      screenOptions={() => ({ headerShown: false })}
    >
      {/* <Stack.Screen name={ROUTE.TABPAGES.EXPLORE} component={} /> */}
      {/* <Stack.Screen name={ROUTE.TABPAGES.WISHLISTS} component={} />
      <Stack.Screen name={ROUTE.TABPAGES.TRIPS} component={} /> */}
      <Stack.Screen name={ROUTE.TABPAGES.MESSAGES} component={Messages} />
      {/* <Stack.Screen name={ROUTE.TABPAGES.PROFILE} component={} /> */}
    </Stack.Navigator>
  );
};

export default MessagesNavigator;
