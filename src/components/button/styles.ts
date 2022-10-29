import {ThemeModel} from '../../styles/themes/types';
import styled from 'styled-components/native';

interface props {
  theme: ThemeModel;
  type: 'solid' | 'clear';
  color?: string;
}

export const ButtonView = styled.TouchableOpacity`
  
  ${({type, theme}: props) =>
    type == 'solid' && `
    padding: 10px 15px;
    border-radius: 8px;
    background-color: ${theme.primary};
  `}
`;

export const ButtonTitle = styled.Text`
  color: ${({color}: props) => color || '#111'};

  ${({type}: props) =>
    type == 'solid' &&
    `
    color: #fff
  `}
`;
