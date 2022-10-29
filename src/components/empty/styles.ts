import styled from "styled-components/native";
import { ThemeModel } from "../../styles/themes/types";

interface props {
  theme: ThemeModel
  height: number
}

export const Background = styled.View`
  height: ${({height}: props) => `${height * 0.4}px`};
  width: 100%;
  justify-content: center;
  align-items: center;
`
export const Text = styled.Text`
  font-size: 20px;
  margin-bottom: 10px;
  color: ${({theme}: props) => theme.text};
`