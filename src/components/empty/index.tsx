import React from 'react';
import { useWindowDimensions } from 'react-native';
import { Background, Text } from './styles';

interface EmptyProps {
  text: string;
  icon?: React.ReactNode
}

export const Empty: React.FC<EmptyProps> = ({text, icon}) => {
  const { height } = useWindowDimensions()

  return (
    <Background height={height}>
      <Text>{text}</Text>

      {icon}
    </Background>
  )
}