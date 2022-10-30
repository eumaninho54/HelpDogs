import React, { useContext } from 'react';
import { Background, BackgroundIcon, InfoView, Text } from './styles';
import { ThemeContext } from 'styled-components/native';
import { ThemeModel } from '../../../styles/themes/types';


interface InfoDogProps {
  icon: React.ReactNode
  title: string;
  text: string;
}

export const InfoDog: React.FC<InfoDogProps> = ( { icon, text, title }) => {
  const themeContext = useContext<ThemeModel>(ThemeContext)

  return (
    <Background>
      <BackgroundIcon>
  
        {icon}
      </BackgroundIcon>

      <InfoView>
        <Text
          color={themeContext.secundaryText} 
          numberOfLines={1}>{title}</Text>
        <Text 
          weight={600}
          color={themeContext.text}
          numberOfLines={1}>{text}</Text>
      </InfoView>
    </Background>
  )
}