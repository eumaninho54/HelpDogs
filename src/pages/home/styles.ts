import styled from "styled-components/native";
import { ThemeModel } from "../../styles/themes/interface";

interface props {
  theme: ThemeModel
}

export const Background = styled.View`
  flex: 1;
  background-color: ${({theme}: props) => theme.background};
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`