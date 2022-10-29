import Icon from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components/native';
import {ThemeModel} from '../../styles/themes/types';

interface props {
  theme: ThemeModel;
}

export const Background = styled.View`
  flex: 1;
  background-color: ${({theme}: props) => theme.background};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 20px;
`;

export const SearchView = styled.View`
  flex-direction: column;
  padding: 10px 20px;
  margin-bottom: 15px;
`;

export const Search = styled.View.attrs(({theme}: props) => ({
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
  flex-direction: row;
  width: 100%;
  padding: 0px 14px;
  border-radius: 6px;
  margin-top: 15px;
`;

export const Input = styled.TextInput`
  color: ${({theme}: props) => theme.secundaryText};
  font-size: 16px;
  width: 73%;
  align-self: center;
  padding: 0px;
  height: 100%;
`;

export const IconSearch = styled(Icon)`
  margin-right: 10px;
  width: 10%;
  align-self: center;
  padding: 14px 0px;
`;

export const Title = styled.Text`
  font-size: 19px;
  color: ${({theme}: props) => theme.text};
`;
