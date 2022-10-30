import styled from 'styled-components/native';
import {ThemeModel} from '../../styles/themes/types';
import {RFValue} from 'react-native-responsive-fontsize';
import {SafeAreaView as safeAreaView} from 'react-native-safe-area-context';


interface props {
  theme: ThemeModel;
  weight?: 'bold';
  width?: number;
  align?: 'center';
}

export const SafeAreaView = styled(safeAreaView)`
  flex: 1;
  background-color: ${({theme}: props) => theme.background};
`;

export const Background = styled.ScrollView`
  flex: 1;
  background-color: ${({theme}: props) => theme.background};
`;

export const Banner = styled.ImageBackground`
  width: 100%;
  margin: 10px 20px;
  padding: 15px 20px;
`;

export const TitleBanner = styled.Text`
  color: #fff;
  font-size: ${RFValue(20)};
  font-weight: bold;
  width: 45%;
  margin-bottom: 10px;
`;

export const TextBanner = styled.Text`
  color: #fff;
  font-weight: 600;
  font-size: ${RFValue(15)};
  width: ${({width}: props) => `${width || '100'}%`};
  text-align: ${({align}: props) => align || 'left'};
`;

export const ButtonBanner = styled.TouchableOpacity`
  margin-top: 20px;
  color: #fff;
  background-color: ${({theme}: props) => theme.primary};
  width: 90px;
  justify-content: center;
  align-items: center;
  padding: 7px;
`;