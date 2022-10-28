import {ThemeModel} from '../../styles/themes/types';
import styled from 'styled-components/native';

interface props {
  theme: ThemeModel;
  backgroundColor: string;
  size: number;
  color: string;
  weight: 'normal' | 'bold';
}

export const ImageBanner = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 50%;
  background-color: red;
`;

export const BackgroundIcon = styled.View`
  margin: 10px;
  border-radius: 25px;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: ${({backgroundColor}: props) => backgroundColor};
`;

export const Background = styled.View`
  position: absolute;
  background-color: ${({theme}: props) => theme.background};
  bottom: 0;
  width: 100%;
  height: 55%;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;

export const Content = styled.ScrollView`
  padding: 30px 20px 0px 20px;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 25px;
`;

export const Title = styled.Text`
  font-size: ${({size}: props) => `${size}px`};
  font-weight: ${({weight}: props) => weight};
  color: ${({color}: props) => color};
  flex-shrink: 1;
`;

export const Text = styled.Text`
  margin-top: 10px;
`;
