import styled from "styled-components/native";
import { theme } from "../../style/colors";

export const Background = styled.Image`
  position: absolute;
  top: -20px;
  z-index: 2;
`;

export const Container = styled.View`
  flex: 1;
  height: 715px;
  position: relative;
  z-index: 99;
`;
