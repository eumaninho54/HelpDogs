import { BlurView } from "@react-native-community/blur";
import styled from "styled-components/native";
import { ThemeModel } from "../../styles/themes/types";

interface props {
  theme: ThemeModel
  height: number;
  width: number;
}

export const Background = styled(BlurView)`
  flex: 1;
`

export const Content = styled.View.attrs(({theme}: props) => ({
  shadowColor: theme.shadow,
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.22,
  shadowRadius: 5.46,
  elevation: 9,
}))`
  position: absolute;
  background-color: ${({theme}: props) => theme.secundaryBackground};
  width: 300px;
  height: 250px;
  padding: 20px;
  top: ${({height}: props) => `${(height / 2) - (height * 0.05 + 125)}px`};
  left: ${({width}: props) => `${(width / 2) - 150}px`};
  justify-content: center;
  align-items: center;
`