import {ThemeModel} from '../../styles/themes/types';
import styled from 'styled-components/native';

interface props {
  theme: ThemeModel;
}

export const Background = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}: props) => theme.background};
`;
