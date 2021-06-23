import styled from "styled-components/native";
import { theme } from "../../style/colors";

export const ContainerTitleResumo = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 0px 20px;
`;

export const TitleResumeDados = styled.Text`
  color: ${theme.color.blue_dark};
  font-size: 23px;
  font-weight: bold;
`;
