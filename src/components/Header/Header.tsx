import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { theme } from "../../style/colors";
import { DrawerActions, useNavigation } from "@react-navigation/native";

import { Container, Logo } from "./styled";
import logo from "../../assets/Logo.png";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  const nagivation = useNavigation();
  return (
    <Container>
      <TouchableOpacity
        onPress={() => nagivation.dispatch(DrawerActions.openDrawer())}
        activeOpacity={0.7}
      >
        <Ionicons
          name="menu"
          size={35}
          style={{ color: theme.color.blue_dark }}
        />
      </TouchableOpacity>

      <Logo source={logo} />
    </Container>
  );
}
