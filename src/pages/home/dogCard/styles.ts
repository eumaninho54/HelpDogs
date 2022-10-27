import { ThemeModel } from './../../../styles/themes/interface';
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome5";

interface props {
  theme: ThemeModel
}

export const Background = styled.View`
  background-color: ${({theme}: props) => theme.secundaryBackground};
  width: auto;
  margin: 15px 20px;
  padding: 14px 0px 14px 14px;
  flex-direction: row;
  border-radius: 6px;
  justify-content: space-around;
`

export const ImageDog = styled.Image`
  width: 30%;
  height: 100px;
  border-radius: 6px;
`

export const Content = styled.View`
  flex-direction: column;
  padding: 5px 15px;
  width: 70%;
`

export const Header = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`

export const Name = styled.Text`
  color: ${({theme}: props) => theme.text};
  font-weight: bold;
  font-size: 16px;
  width: 80%;
  word-wrap: break-word;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Favorite = styled(Icon)`
  width: 20%;
  text-align: right;
`

export const Text = styled.Text`
  color: ${({theme}: props) => theme.secundaryText};
  font-size: 14px;
`

export const ViewButton = styled.View`
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  margin-top: 10px;
`