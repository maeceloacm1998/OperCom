import React from "react";
import { TouchableOpacity } from "react-native";

import { Container, Name, Image } from "./styled";
import User from "../../assets/user.png";

export function NameUser() {
  return (
    <Container>
      <TouchableOpacity>
        <Image source={User} />
      </TouchableOpacity>
      <Name>Olá, Vitor</Name>
    </Container>
  );
}
