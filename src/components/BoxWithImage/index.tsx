import React from "react";
import { Image } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

interface BoxWithImageProps {
  TitleLight?: string;
  TitleBold?: string;
  Subscription?: string;
  TextButton?: string;
  image: any;
}

import {
  Container,
  ContainerWithStatus,
  ContainerWithImage,
  TextLight,
  TextBold,
  TextPurple,
  AllButton,
  TextAllButton,
} from "./styled";

export function BoxWithImage({
  TitleLight,
  TitleBold,
  Subscription,
  TextButton,
  image,
}: BoxWithImageProps) {
  return (
    <Container style={{ elevation: 8 }}>
      <ContainerWithStatus
        style={{ borderTopStartRadius: 10, borderBottomStartRadius: 10 }}
      >
        {TitleLight && <TextLight>{TitleLight}</TextLight>}

        {TitleBold && <TextBold>{TitleBold}</TextBold>}

        {Subscription && <TextPurple>{Subscription}</TextPurple>}
      </ContainerWithStatus>

      <ContainerWithImage>
        <Image
          source={image}
          style={{
            height: 110,
            width: "100%",
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          }}
        />

        <AllButton activeOpacity={0.6}>
          <TextAllButton>{TextButton}</TextAllButton>
          <FontAwesome
            name="chevron-right"
            size={20}
            style={{
              color: "white",
              marginLeft: 5,
            }}
          />
        </AllButton>
      </ContainerWithImage>
    </Container>
  );
}
