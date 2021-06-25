import React from "react";
import { Image, Text, TouchableOpacity, ViewProps } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

import {
  ContainerBox,
  TextPay,
  TextValue,
  TextDescription,
  TextSubDescription,
  BoxWidth,
  TextRed,
  SubContainerBox,
  AllButton,
  TextAllButton,
} from "./styled";
import { theme } from "../../style/colors";

interface BoxPayProps {
  title: string;
  Text: string;
  TextVencimento: string;
  Description?: string;
  ValueButton: string;
  allColor: boolean;
}

export function BoxPay({
  allColor,
  Text,
  TextVencimento,
  Description,
  title,
  ValueButton,
}: BoxPayProps) {
  return (
    <ContainerBox allColor={allColor}>
      <SubContainerBox allColor={allColor}>
        <TextPay>{title}</TextPay>

        <TextValue allColor={allColor}>{Text}</TextValue>

        <TextSubDescription>{TextVencimento}</TextSubDescription>

        {Description && (
          <BoxWidth>
            <TextDescription>{Description}</TextDescription>
          </BoxWidth>
        )}

        <AllButton>
          <TextAllButton allColor={allColor}>{ValueButton}</TextAllButton>
          <FontAwesome
            name="chevron-right"
            size={25}
            style={{
              color: allColor ? theme.color.red_dark : theme.color.blue_dark,
              marginHorizontal: 10,
            }}
          />
        </AllButton>
      </SubContainerBox>
    </ContainerBox>
  );
}
