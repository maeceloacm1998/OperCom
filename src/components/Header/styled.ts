import styled from "styled-components/native";
import { theme } from "../../style/colors";

export const Container = styled.View`
  height: 65px;
  align-items: center;
  flex-direction: row;
  background-color: ${theme.color.gray};
  padding: 0px 20px;
`;

export const Logo = styled.Image`
  margin-left: 20%;
  height: 40px;
  width: 130px;
`;
