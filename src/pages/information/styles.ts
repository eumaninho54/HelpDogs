import {ThemeModel} from '../../styles/themes/types';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'

interface props {
  theme: ThemeModel;
  backgroundColor: string;
  size: number;
  color: string;
  weight: 'normal' | 'bold';
  height: number
}

export const Background = styled.View`
  flex: 1;
  background-color: ${({theme}: props) => theme.background};
`;

export const Banner = styled.ImageBackground`
  width: 100%;
  height: ${({height}: props) => `${height * 0.45}px`};
  overflow: hidden;
  align-items: flex-start;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
`;

export const BackgroundIcon = styled.TouchableOpacity`
  margin: 10px;
  border-radius: 50px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${({backgroundColor}: props) => `${backgroundColor}`};
`;


export const Content = styled.ScrollView`
  width: 100%;
`;

export const Head = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 25px 25px 20px 25px;
  margin-bottom: 20px;
`;

export const ViewText = styled.View`
  width: 80%;
`

export const Text = styled.Text`
  font-size: ${({size}: props) => RFValue(size)};
  font-weight: ${({weight}: props) => weight};
  color: ${({color}: props) => color};
  flex-shrink: 1;
  margin-top: 5px;
`;

export const InfoGroup = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 5px 15px 10px;
  flex-wrap: wrap;
`