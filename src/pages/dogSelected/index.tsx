import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { DogSelectedRouteType } from '../../routes/tab/types';


export const DogSelected: React.FC = () => {
  const {params} = useRoute<DogSelectedRouteType>()

  console.log(params.dogData.id)

  return (
    <View style={{backgroundColor: 'red', width: 100, height: 100}}/>
  ) 
}