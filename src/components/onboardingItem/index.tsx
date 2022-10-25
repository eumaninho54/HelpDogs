import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import { Background, Description, Image, Title, ViewText } from './styles';

interface OnboardingItemProps {
  item: any
}

export const OnboardingItem: React.FC<OnboardingItemProps> = ({ item }) => {
  const {width} = useWindowDimensions()
  
  return (
    <Background width={width}>
      <Image 
        source={item.image} 
        width={width}/>
        
      <ViewText width={width}>
        <Title>{item.title}</Title>

        <Description>{item.description}</Description>
      </ViewText>
    </Background>
  )
}
