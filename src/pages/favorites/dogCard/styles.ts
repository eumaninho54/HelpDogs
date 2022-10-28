import { ThemeModel } from './../../../styles/themes/types';
import styled from "styled-components/native";

interface props {
  theme: ThemeModel
  size: number
  color: string
  weight: number
}

export const Background = styled.TouchableOpacity`
  width: 170px;
  padding: 10px;
`

export const Image = styled.ImageBackground`
  width: 100%;
  height: 200px;
  border-radius: 20px;
  margin-bottom: 8px;
  align-items: flex-end;
`

export const Text = styled.Text`
  margin-top: 8px;
  font-size: ${({size}: props) => `${size}px`};
  color:  ${({color}: props) => color};
  font-weight: ${({weight}: props) => `${weight || 400}` };
  width: 100%;
`

export const BackgroundIcon = styled.View`
  margin: 8px;
  border-radius: 10px;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  background-color: #ffffffcc;
`;