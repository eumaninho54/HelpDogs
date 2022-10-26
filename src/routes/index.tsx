import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components/native';
import { Onboarding } from '../pages/onboarding';
import { StoreState } from '../store';
import { ThemeModel } from '../styles/themes/interface';
import { TabNav } from './tab';

const { Navigator, Screen } = createNativeStackNavigator()

const Routes: React.FC = () => {
  const user = useSelector((store: StoreState) => store.user)
  const themeContext = useContext<ThemeModel>(ThemeContext)


  return (
    <NavigationContainer >
      { user.firstAccess 
        ? <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='onboarding' component={Onboarding}/>
          </Navigator>

        : <Navigator screenOptions={{ headerShown: false,}}>
            <Screen name='tab' component={TabNav}/>
          </Navigator>
      }
      
    </NavigationContainer>
  )
}

export default Routes;