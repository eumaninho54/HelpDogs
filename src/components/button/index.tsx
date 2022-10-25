import { Text } from '@rneui/base';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ButtonTitle, ButtonView } from './styles';

// import { Container } from './styles';

interface ButtonProps {
  onPress: () => void
  title: string
  type: "solid" | "clear"
}

export const Button: React.FC<ButtonProps> = ({ onPress, title, type }) => {
  return (
    <ButtonView onPress={onPress} type={type}>
      <ButtonTitle type={type}>{title}</ButtonTitle>
    </ButtonView>
  )
}
