import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import type { CompositeScreenProps, NavigatorScreenParams, RouteProp } from "@react-navigation/native"
import type {  NativeStackScreenProps } from "@react-navigation/native-stack"
import { NativeStackParamList } from '../types';

export type TabParamList = {
  'home': NavigatorScreenParams<NativeStackParamList>
  'favorites': undefined
}

export type HomeScreenNavigationProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'home'>,
  NativeStackScreenProps<NativeStackParamList>
>


export type DogSelectedRouteType = RouteProp<NativeStackParamList, 'dogSelected'>