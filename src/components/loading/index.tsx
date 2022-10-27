import React, { useContext } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { ThemeContext } from 'styled-components/native';
import { ThemeModel } from '../../styles/themes/types';
import { Background } from './styles';


const Loading: React.FC = () => {
  const themeContext = useContext<ThemeModel>(ThemeContext)

  return (
    <Background>
      <ActivityIndicator
        size="large"
        color={themeContext.primary} />
    </Background>
  )
}

export default Loading;