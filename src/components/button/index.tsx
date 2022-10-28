import React from 'react';
import { ButtonTitle, ButtonView } from './styles';

interface ButtonProps {
  onPress: () => void
  title: string | React.ReactNode
  type: "solid" | "clear"
}

export const Button: React.FC<ButtonProps> = ({ onPress, title, type }) => {
  return (
    <ButtonView onPress={onPress} type={type}>
      <ButtonTitle type={type}>{title}</ButtonTitle>
    </ButtonView>
  )
}
