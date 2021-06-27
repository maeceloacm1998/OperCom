import "react-native-gesture-handler";
import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { DrawerCustom } from "../components/DrawerCustom";

import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { Extrato } from "../pages/Extrato";
import { Configuration } from "../pages/configuration";

import { FontAwesome } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

const DrawerMenu: React.FC = () => (
  <Drawer.Navigator drawerContent={(props) => <DrawerCustom {...props} />}>
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="Extrato" component={Extrato} />
    <Drawer.Screen name="Perfil" component={Profile} />
    <Drawer.Screen name="Config" component={Configuration} />
  </Drawer.Navigator>
);

export default DrawerMenu;
