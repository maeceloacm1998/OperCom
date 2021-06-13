import React from "react";
import { ScrollView } from "react-native";

import HeaderHome from "../../components/Header/Header";
import NameUser from "../../components/NameUser/NameUser";

import { Container, ContainerScrollView } from "./styled";
import { getStatusBarHeight } from "react-native-status-bar-height";

const barHeight = getStatusBarHeight();

export default function App() {
  return (
    <Container style={{ marginTop: barHeight }}>
      <HeaderHome />
      <ScrollView>
        <ContainerScrollView>
          <NameUser />
        </ContainerScrollView>
      </ScrollView>
    </Container>
  );
}
