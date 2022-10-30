import styled from "styled-components/native";
import { ThemeModel } from "../../../styles/themes/types";


interface props {
  theme: ThemeModel
  color: string
  weight: number;
}

export const Background = styled.View`
  background-color: ${({theme}: props) => theme.secundaryBackground};
  width: 165px;
  padding: 10px;
  margin: 10px 0px;
  border-radius: 9px;
  flex-direction: row;
`

export const BackgroundIcon = styled.View`
  background-color: ${({theme}: props) => `${theme.primary}20`};
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 9px;
`

export const InfoView = styled.View`
  justify-content: center;
`

export const Text = styled.Text`
  margin: 2px 10px;
  color: ${({color}: props) => color};
  font-weight: ${({weight} : props) => weight || 400};
`