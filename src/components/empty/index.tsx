import React from 'react';
import { useWindowDimensions } from 'react-native';
import { Background, Text } from './styles';

interface EmptyProps {
  text: string;
  icon?: React.ReactNode
}

export const Empty: React.FC<EmptyProps> = ({text, icon}) => {

  return (
    <Background>
      <Text>{text}</Text>
      {icon}
    </Background>
  )
}