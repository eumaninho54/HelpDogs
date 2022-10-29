import styled from "styled-components/native";
import { ThemeModel } from "../../styles/themes/types";


interface props {
  theme: ThemeModel
  weight?: 'bold'
}

export const Background = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 20px;
`

export const Title = styled.Text`
  font-size: 19px;
  color: ${({theme}: props) => theme.text};

  ${({weight}: props) =>
    weight == 'bold' &&
    `
    font-weight: bold
  `}
`;
