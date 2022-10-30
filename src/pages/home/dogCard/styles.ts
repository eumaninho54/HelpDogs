import {ThemeModel} from '../../../styles/themes/types';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'

interface props {
  theme: ThemeModel;
}

export const Background = styled.View.attrs(({theme}: props) => ({
  shadowColor: theme.shadow,
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.22,
  shadowRadius: 5.46,
  elevation: 9
}))`
  background-color: ${({theme}: props) => theme.secundaryBackground};
  width: auto;
  margin: 18px 20px;
  padding: 14px 0px 14px 14px;
  flex-direction: row;
  border-radius: 6px;
  justify-content: space-around;
`;

export const Image = styled.Image`
  width: 30%;
  height: 120px;
  border-radius: 6px;
`;

export const Content = styled.View`
  flex-direction: column;
  padding: 5px 15px;
  width: 70%;
  justify-content: space-evenly;
`;

export const Header = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const BackgroundIcon = styled.TouchableOpacity`
  border-radius: 25px;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}: props) => `${theme.primary}20`};
  
`;

export const Name = styled.Text`
  color: ${({theme}: props) => theme.text};
  font-weight: bold;
  font-size: ${RFValue(16)};
  width: 100%;
  word-wrap: break-word;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-shrink: 1;
`;

export const Text = styled.Text`
  color: ${({theme}: props) => theme.secundaryText};
  font-size: ${RFValue(14)};
  width: 80%;
`;

export const ViewButton = styled.View`
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: auto;
  margin-top: 10px;
`;
