import React from "react";
import { ScrollView, Image } from "react-native";

import HeaderHome from "../../components/Header/Header";
import NameUser from "../../components/NameUser/NameUser";
import { BoxResumeDados } from "../../components/BoxResumeDados";

import Title from "../../components/Tittle/Tittle";

import IconEnvelope from "../../assets/envelope.png";
import IconPhone from "../../assets/Phone.png";
import IconWifi from "../../assets/wifi.png";

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
          <Title children="Resumo de dados" />

          <ScrollView
            style={{ marginVertical: 20 }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <BoxResumeDados
              style={{ marginLeft: 20 }}
              title={`Consumo de ${"\n"}     Internet`}
              subTitle="3,7/12GB"
              image={IconWifi}
            />

            <BoxResumeDados
              style={{ marginHorizontal: 20 }}
              title={`Consumo de ${"\n"}        SMS`}
              subTitle="3,7/12GB"
              image={IconEnvelope}
            />

            <BoxResumeDados
              style={{ marginRight: 20 }}
              title={`Consumo de ${"\n"}     Ligacao`}
              subTitle="3,7/12GB"
              image={IconPhone}
            />
          </ScrollView>

          <Title children="Pagamentos" />
        </ContainerScrollView>
      </ScrollView>
    </Container>
  );
}
