import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Onboarding } from '../pages/onboarding';

const { Navigator, Screen } = createNativeStackNavigator()

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name='onboarding' component={Onboarding}/>
      </Navigator>
    </NavigationContainer>
  )
}

export default Routes;