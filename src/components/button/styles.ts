import { ThemeModel } from './../../styles/themes/interface';
import styled from "styled-components/native";

interface props {
  theme: ThemeModel
  type: "solid" | "clear"
}

export const ButtonView = styled.TouchableOpacity`
  ${({type, theme}: props) =>  type == "solid" && `
    background-color: ${theme.primary};
    padding: 10px 15px;
    border-radius: 8px;
  `}
`

export const ButtonTitle = styled.Text`

  ${({type}: props) =>  type == "solid" && `
    color: #fff
  `}
`