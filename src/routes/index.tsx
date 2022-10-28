import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useSelector } from 'react-redux';
import { Information } from '../pages/information';
import { Onboarding } from '../pages/onboarding';
import { StoreState } from '../store';
import { TabNav } from './tab';
import { NativeStackParamList } from './types';

const { Navigator, Screen } = createNativeStackNavigator<NativeStackParamList>()

const Routes: React.FC = () => {
  const user = useSelector((store: StoreState) => store.user)

  return (
    <NavigationContainer >
      {user.firstAccess
        ? <Navigator screenOptions={{ headerShown: false }}>
          <Screen name='onboarding' component={Onboarding} />
        </Navigator>

        : <Navigator screenOptions={{ headerShown: false }}>
          <Screen name='tab' component={TabNav} />
          <Screen name='information' component={Information} />
        </Navigator>
      }
    </NavigationContainer>
  )
}

export default Routes;