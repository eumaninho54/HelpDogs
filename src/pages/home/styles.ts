import styled from "styled-components/native";
import { ThemeModel } from "../../styles/themes/interface";

interface props {
  theme: ThemeModel
}

export const Background = styled.View`
  flex: 1;
  background-color: ${({theme}: props) => theme.backgroundColor};
`