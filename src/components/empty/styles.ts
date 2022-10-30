import styled from "styled-components/native";
import { ThemeModel } from "../../styles/themes/types";
import { RFValue } from 'react-native-responsive-fontsize'

interface props {
  theme: ThemeModel
  height: number
}

export const Background = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`
export const Text = styled.Text`
  font-size: ${RFValue(20)};
  margin-bottom: 10px;
  color: ${({theme}: props) => theme.text};
`