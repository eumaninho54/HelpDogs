import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useContext } from 'react';
import { useWindowDimensions, View } from 'react-native';
import { Favorites } from '../../pages/favorites';
import Home from '../../pages/home';
import Settings from '../../pages/settings';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ThemeModel } from '../../styles/themes/types';
import { ThemeContext } from 'styled-components/native';
import { TabParamList } from './types';

const { Navigator, Screen } = createBottomTabNavigator<TabParamList>()

export const TabNav: React.FC = () => {
  const { height } = useWindowDimensions()
  const themeContext = useContext<ThemeModel>(ThemeContext)

  return (
    <Navigator
      initialRouteName='home'
      sceneContainerStyle={{ backgroundColor: '#f22' }}
      screenOptions={{
        headerShadowVisible: false,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: themeContext.tabNavBackground,
          height: height * 0.12,
          borderTopWidth: 0
        }
      }}>
      <Screen
        name='home'
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Icon
                name='paw'
                size={30}
                color={focused ? themeContext.primary : themeContext.icon} />
            </View>
          )
        }} />

      <Screen
        name='favorites'
        component={Favorites}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Icon
                name='heart'
                solid
                size={30}
                color={focused ? themeContext.primary : themeContext.icon} />
            </View>
          )
        }} />
    </Navigator>
  )
}