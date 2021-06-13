import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../style/colors";

import { Container, Logo } from "./styled";
import { color } from "react-native-reanimated";
import logo from "../../assets/Logo.png";

export default function Header() {
  return (
    <Container>
      <TouchableOpacity>
        <Ionicons name="menu" size={35} style={{ color: colors.blue_dark }} />
      </TouchableOpacity>

      <Logo source={logo} />
    </Container>
  );
}
