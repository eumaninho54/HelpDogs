import styled from 'styled-components/native';
import {ThemeModel} from '../../styles/themes/types';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconAwesome from 'react-native-vector-icons/FontAwesome';


interface props {
  theme: ThemeModel;
  color: string;
  weight: number;
  size?: number;
}

export const Background = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({theme}: props) => theme.background};
`;

export const BackgroundIcon = styled.View`
  margin: 10px;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export const Head = styled.View.attrs(({theme}: props) => ({
  shadowColor: theme.shadow,
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.22,
  shadowRadius: 5.46,
  elevation: 9,
}))`
  width: auto;
  margin: 20px 20px 10px;
  background-color: ${({theme}: props) => theme.secundaryBackground};
  justify-content: center;
  padding: 13px 20px;
`;


export const Content = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px 10px;
  margin: 10px 20px;
  width: auto;
`

export const IconView = styled.View`
  flex-direction: row;
  align-items: center;
  width: 80%;
`

export const Title = styled.Text`
  font-size: ${({size}: props) => `${size || 16}px`};
  color: ${({color}: props) => color};
  font-weight: ${({weight}: props) => weight || 400};
`;

export const IconMaterial = styled(IconMaterialIcons)`
  min-width: 30px;
  margin-right: 10px;
`

export const IconFontAwesome = styled(IconAwesome)`
  min-width: 30px;
  margin-right: 10px;
`

export const ContentModal = styled.View`
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`

export const ButtonGroup = styled.View`
  width: auto;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`