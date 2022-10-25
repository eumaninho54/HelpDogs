import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useSelector } from 'react-redux';
import Home from '../pages/home';
import { Onboarding } from '../pages/onboarding';
import { StoreState } from '../store';

const { Navigator, Screen } = createNativeStackNavigator()

const Routes: React.FC = () => {
  const user = useSelector((store: StoreState) => store.user)

  return (
    <NavigationContainer>
      { user.firstAccess 
        ? <Navigator screenOptions={{ headerShown: false}}>
            <Screen name='onboarding' component={Onboarding}/>
          </Navigator>
        : <Navigator>
            <Screen name='home' component={Home}/>
          </Navigator>
      }
      
    </NavigationContainer>
  )
}

export default Routes;