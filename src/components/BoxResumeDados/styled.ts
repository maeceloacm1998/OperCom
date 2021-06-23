import styled from "styled-components/native";
import { theme } from "../../style/colors";

export const ContainerBoxCard = styled.View`
  height: 167px;
  width: 140px;
  padding: 25px 18px;
  justify-content: space-around;
  align-items: center;
  border: 1px solid ${theme.color.blue_dark};
  border-radius: 8px;
`;

export const Title = styled.Text`
  width: 105px;
  font-size: 18px;
`;

export const SubTitle = styled.Text`
  color: ${theme.color.purple_dark};
  font-size: 20px;
  font-weight: bold;
`;
