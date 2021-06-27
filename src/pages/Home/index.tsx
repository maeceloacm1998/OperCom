import React from "react";
import { ScrollView, Image, StatusBar } from "react-native";

import HeaderHome from "../../components/Header/Header";
import { BoxResumeDados } from "../../components/BoxResumeDados";
import Title from "../../components/Tittle/Tittle";
import { BoxPay } from "../../components/BoxPay";
import { BoxWithImage } from "../../components/BoxWithImage";
import { theme } from "../../style/colors";

import IconEnvelope from "../../assets/envelope.png";
import IconPhone from "../../assets/Phone.png";
import IconWifi from "../../assets/wifi.png";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";

import { Container, ContainerScrollView } from "./styled";
import { getStatusBarHeight } from "react-native-status-bar-height";

const barHeight = getStatusBarHeight();

export function Home() {
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

        <Title children="Para Você " />
        <BoxWithImage
          TitleLight="Habilite agora seu débito automático e ganhe"
          Subscription="10% de desconto!"
          TextButton="Habilitar débito "
          image={img1}
        />

        <Title children="Seu Plano" />
        <BoxWithImage
          TitleBold="Opercom Black"
          Subscription="Renova em 04/07/2021 "
          TextButton="Mudar plano "
          image={img2}
        />

        <Title children="Confira Agora" />
        <BoxWithImage
          TitleLight="Confira a localização
          de torres telefônicas para um melhor sinal!"
          TextButton="Ver localização "
          image={img3}
        />
      </ScrollView>
    </Container>
  );
}
