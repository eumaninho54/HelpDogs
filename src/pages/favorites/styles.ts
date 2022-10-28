import styled from "styled-components/native";
import { ThemeModel } from "../../styles/themes/types";

interface props {
  theme: ThemeModel;
  weight?: 'bold';
  width?: number;
  align?: 'center'
}

export const Background = styled.ScrollView`
  flex: 1;
  background-color: ${({theme}: props) => theme.background};
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 20px;
`;

export const Title = styled.Text`
  font-size: 19px;
  color: ${({theme}: props) => theme.text};

  ${({weight}: {weight?: 'bold'}) =>
    weight == 'bold' &&
    `
    font-weight: bold
  `}
`;

export const Banner = styled.ImageBackground`
  width: auto;
  height: 180px;
  margin: 10px 20px;
  padding: 15px 20px;
`

export const TitleBanner = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  width: 45%;
  margin-bottom: 10px;
`

export const TextBanner = styled.Text`
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  width: ${({width}: props) => `${width || '100'}%`};
  text-align: ${({align}: props) => align || 'left'};
`

export const ButtonBanner = styled.TouchableOpacity`
  margin-top: 20px;
  color: #fff;
  background-color: ${({theme}: props) => theme.primary};
  width: 90px;
  justify-content: center;
  align-items: center;
  padding: 7px;
`

export const Separator = styled.View`
  width: 5px;
`