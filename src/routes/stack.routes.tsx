import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../pages/Home/Home";

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: "#ffffff",
      },
    }}
  >
    <stackRoutes.Screen name="Home" component={Home} />
  </stackRoutes.Navigator>
);

export default AppRoutes;
