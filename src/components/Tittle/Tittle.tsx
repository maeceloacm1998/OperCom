import React from "react";
import { Image } from "react-native";

import Line from "../../assets/Line.png";

import { ContainerTitleResumo, TitleResumeDados } from "./styled";

interface TittleProps {
  children: string;
}

export default function Tittle({ children }: TittleProps) {
  return (
    <ContainerTitleResumo>
      <Image source={Line} style={{ marginRight: 10 }} />
      <TitleResumeDados>{children}</TitleResumeDados>
    </ContainerTitleResumo>
  );
}
