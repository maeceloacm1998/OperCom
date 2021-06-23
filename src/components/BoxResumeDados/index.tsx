import React from "react";
import { ViewProps } from "react-native";
import { Image, View, ViewComponent } from "react-native";

import { ContainerBoxCard, Title, SubTitle } from "./styled";

interface BoxResumeProps extends ViewProps {
  title: string;
  subTitle: string;
  image: any;
}

export function BoxResumeDados({
  title,
  image,
  subTitle,
  ...rest
}: BoxResumeProps) {
  return (
    <ContainerBoxCard {...rest}>
      <Title>{title}</Title>

      <Image source={image} />
      <SubTitle>{subTitle}</SubTitle>
    </ContainerBoxCard>
  );
}
