import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

interface Props {
  width: number;
}

export const Background = styled.View`
  flex: 1;
  background-color: #EBEBEB;
  width: ${({width}: Props) => `${width}px` };
  align-items: center;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain'
})`
  justify-content: center;
  width: ${({width}: Props) => `${width}px` };
  height: 300px;
  margin: 40px;
`;

export const ViewText = styled.View`
  width: ${({width}: Props) => `${width}px`};
  padding: 10px;
`;

export const Title = styled.Text`
  font-weight: 800;
  font-size: ${RFValue(28)};
  margin-bottom: 20px;
  color: #C0423F;
  text-align: center;
`;

export const Description = styled.Text`
  font-weight: 300;
  font-size: ${RFValue(16)};
  color: #62656b;
  text-align: center;
  padding: 0px 34px;
`