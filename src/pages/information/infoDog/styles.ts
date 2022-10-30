import styled from "styled-components/native";
import { ThemeModel } from "../../../styles/themes/types";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';

interface props {
  theme: ThemeModel
  color: string
  weight: number;
}

export const Background = styled.View.attrs(({theme}: props) => ({
  shadowColor: theme.shadow,
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.32,
  shadowRadius: 5.46,
  elevation: 9
}))`
  background-color: ${({theme}: props) => theme.secundaryBackground};
  padding: 10px;
  margin: 10px 0px;
  border-radius: 9px;
  flex-direction: row;
  min-width: 175px;
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
  width: auto;
`

export const Text = styled.Text`
  margin: 2px 10px;
  color: ${({color}: props) => color};
  font-weight: ${({weight} : props) => weight || 400};
`