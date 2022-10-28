import {ThemeModel} from '../../../styles/themes/types';
import styled from 'styled-components/native';

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

export const ImageDog = styled.Image`
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

export const Name = styled.Text`
  color: ${({theme}: props) => theme.text};
  font-weight: bold;
  font-size: 16px;
  width: 80%;
  word-wrap: break-word;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Text = styled.Text`
  color: ${({theme}: props) => theme.secundaryText};
  font-size: 14px;
  width: 80%;
`;

export const ViewButton = styled.View`
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: auto;
  margin-top: 10px;
`;
