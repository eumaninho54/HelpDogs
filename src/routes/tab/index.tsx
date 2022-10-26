import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useContext } from 'react';
import { useWindowDimensions, View } from 'react-native';
import { Favorites } from '../../pages/favorites';
import Home from '../../pages/home';
import Settings from '../../pages/settings';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ThemeModel } from '../../styles/themes/interface';
import { ThemeContext } from 'styled-components/native';

const { Navigator, Screen } = createBottomTabNavigator()

export const TabNav: React.FC = () => {
  const { height } = useWindowDimensions()
  const themeContext = useContext<ThemeModel>(ThemeContext)

  return (
    <Navigator 
      initialRouteName='home'
      sceneContainerStyle={{backgroundColor: themeContext.tabNavBackground}}
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
                color={focused ? themeContext.primary : themeContext.tabNavIcon}/>
            </View>
          )
        }}/>

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
                color={focused ? themeContext.primary : themeContext.tabNavIcon}/>
            </View>
          )
        }}/>

      <Screen
        name='settings'
        component={Settings} 
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Icon 
                name='cog' 
                size={30} 
                color={focused ? themeContext.primary : themeContext.tabNavIcon}/>
            </View>
          )
        }}/>

    </Navigator>
  )
}