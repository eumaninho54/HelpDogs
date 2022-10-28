import styled from "styled-components/native";
import { ThemeModel } from "../../styles/themes/types";

interface props {
  theme: ThemeModel
}

export const Background = styled.View`
  height: 70%;
  width: 100%;
  justify-content: center;
  align-items: center;
`
export const Text = styled.Text`
  font-size: 20px;
  margin-bottom: 10px;
  color: ${({theme}: props) => theme.text};
`