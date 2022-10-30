import React from 'react';
import { ButtonTitle, ButtonView } from './styles';

interface ButtonProps {
  onPress: () => void
  title: string | React.ReactNode
  type: "solid" | "clear"
  color?: string
  padding?: boolean
}

export const Button: React.FC<ButtonProps> = ({ onPress, title, type, color, padding }) => {
  console.log(padding)

  return (
    <ButtonView 
      padding={padding}
      onPress={onPress} 
      type={type}>
      <ButtonTitle
        color={color} 
        type={type}>
        {title}
      </ButtonTitle>
    </ButtonView>
  )
}
