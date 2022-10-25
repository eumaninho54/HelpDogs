import React from 'react';
import { useWindowDimensions, View, Animated } from 'react-native';
import { OnBoardingDTO } from '../../../dtos/onBoardingDTO';
import { Dot } from './styles';

interface PaginatorProps {
  data: OnBoardingDTO[];
  scrollX: Animated.Value;
}

const Paginator: React.FC<PaginatorProps> = ({ data, scrollX }) => {
  const { width } = useWindowDimensions()

  return (
    <View style={{flexDirection: 'row', height: 64}}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width]


        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp'
        })

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp'
        })
   
        return <Dot style={{width: dotWidth, opacity: opacity}} key={String(i)}/>
      })}
    </View>
  )
}

export default Paginator;