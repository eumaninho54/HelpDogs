import { Animated } from 'react-native';
import styled from 'styled-components/native'

interface props {
  width: any
}

export const Dot = styled(Animated.View)`
  height: 10px;
  border-radius: 5px;
  background-color: #C0423F;
  margin: 0px 8px;
`