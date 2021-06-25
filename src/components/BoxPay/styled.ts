import styled from "styled-components/native";
import { theme } from "../../style/colors";

interface ColorContainerProps {
  allColor: boolean;
}

export const ContainerBox = styled.View<ColorContainerProps>`
  flex: 1;
  border: 2px solid
    ${(props) =>
      props.allColor ? theme.color.red_dark : theme.color.blue_dark};
  border-radius: 10px;
  margin: 20px;
`;

export const SubContainerBox = styled.View<ColorContainerProps>`
  padding: 10px;
  border-left-width: 10px;
  border-left-color: ${(props) =>
    props.allColor ? theme.color.red_dark : theme.color.blue_dark};
  border-radius: 6px;
`;

export const TextPay = styled.Text`
  font-size: 18px;
  line-height: 30px;
`;

export const TextValue = styled.Text<ColorContainerProps>`
  color: ${(props) =>
    props.allColor ? theme.color.red_dark : theme.color.blue_dark};
  font-size: 23px;
  font-weight: bold;
  line-height: 30px;
`;

export const BoxWidth = styled.View`
  width: 70%;
  flex-direction: row;
  margin-bottom: 15px;
`;

export const TextSubDescription = styled.Text`
  font-size: 13px;
  line-height: 30px;
`;

export const TextDescription = styled.Text`
  font-size: 13px;
`;

export const TextRed = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: ${theme.color.red_dark};
`;

export const AllButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const TextAllButton = styled.Text<ColorContainerProps>`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) =>
    props.allColor ? theme.color.red_dark : theme.color.blue_dark};
`;
