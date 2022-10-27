import Icon from "react-native-vector-icons/AntDesign";
import styled from "styled-components/native";
import { ThemeModel } from "../../styles/themes/interface";

interface props {
  theme: ThemeModel
  weight?: 'bold'
}

export const Background = styled.View`
  flex: 1;
  background-color: ${({theme}: props) => theme.background};
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 20px;
`

export const SearchView = styled.View`
  flex-direction: column;
  padding: 10px 20px;
`

export const Search = styled.View`
  background-color: ${({theme}: props) => theme.secundaryBackground};
  flex-direction: row;
  width: 100%;
  padding: 14px;
  border-radius: 6px;
  margin-top: 15px;
`

export const Input = styled.TextInput`
  color: ${({theme}: props) => theme.secundaryText};
  font-size: 16px;
  width: 73%;
  align-self: center;
  padding: 0px;
`

export const IconSearch = styled(Icon)`
  margin-right: 10px; 
  width: 10%;
  align-self: center;
`

export const Title = styled.Text` 
  font-size: 19px;
  color: ${({theme}: props) => theme.text};

  ${({weight}: {weight?: 'bold'}) =>  weight == 'bold' && `
    font-weight: bold
  `}
`;