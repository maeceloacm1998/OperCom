import styled from "styled-components/native";
import { theme } from "../../style/colors";

export const Container = styled.View`
  flex: 1;
  height: 110px;
  margin: 15px 20px;
  flex-direction: row;
  border-radius: 10px;
`;

export const ContainerWithStatus = styled.View`
  width: 50%;
  padding-left: 15px;
  padding-right: 5px;
  background-color: white;
  flex: 1;
  justify-content: center;
`;

export const TextLight = styled.Text`
  font-size: 14px;
  margin-bottom: 10px;
`;

export const TextBold = styled.Text`
  margin-bottom: 5px;
  font-size: 22px;
  font-weight: bold;
  color: #3d3d3d;
`;

export const TextPurple = styled.Text`
  font-size: 15px;
  color: ${theme.color.purple_dark};
  line-height: 20px;
`;

export const ContainerWithImage = styled.View`
  width: 45%;
  flex: 1;
`;

export const AllButton = styled.TouchableOpacity`
  position: absolute;
  top: 70px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-left: 10px;
  z-index: 2;
`;

export const TextAllButton = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: white;
`;
