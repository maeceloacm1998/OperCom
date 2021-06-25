import React from "react";
import { ScrollView, Image, StatusBar } from "react-native";

import HeaderHome from "../../components/Header/Header";
import NameUser from "../../components/NameUser/NameUser";
import { BoxResumeDados } from "../../components/BoxResumeDados";

import Title from "../../components/Tittle/Tittle";
import { BoxPay } from "../../components/BoxPay";

import IconEnvelope from "../../assets/envelope.png";
import IconPhone from "../../assets/Phone.png";
import IconWifi from "../../assets/wifi.png";

import { Container, ContainerScrollView } from "./styled";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { theme } from "../../style/colors";

const barHeight = getStatusBarHeight();

export default function App() {
  return (
    <Container style={{ marginTop: barHeight }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={`${theme.color.gray}`}
        translucent
      />

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

          <BoxPay
            allColor
            title="Fatura em atraso"
            Text="Valor de R$59,90"
            TextVencimento="Vencido em 27/06/2021"
            Description="Atenção! Pagamento em atraso,
            será cobrado multa de 5% no valor"
            ValueButton="Pagar Fatura"
          />

          <BoxPay
            allColor={false}
            title="Próximo Pagamento"
            Text="Valor de R$59,90"
            TextVencimento="Vencimento dia 10/07/2021"
            ValueButton="Pagamentos anteriores"
          />
        </ContainerScrollView>
      </ScrollView>
    </Container>
  );
}
