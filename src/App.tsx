import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './routes';
import { PersistGate } from 'redux-persist/integration/react'
import { persist, store } from './store';
import { Provider } from "react-redux";
import { LogBox, StatusBar, useColorScheme, Platform } from 'react-native';
import themes from './styles/themes';
import { ThemeProvider } from 'styled-components/native';

LogBox.ignoreAllLogs() // Ingore logs in dev

const App: React.FC = () => {
  const deviceTheme = useColorScheme()
  const theme = deviceTheme != null && deviceTheme != undefined
    ? themes[deviceTheme]
    : themes['light']

  return (
    <SafeAreaProvider>
      <StatusBar
        animated
        backgroundColor={theme.primary}
        barStyle={Platform.OS == 'ios' ? 'dark-content' : 'light-content'}
        />
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate persistor={persist}>
            <Routes />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

export default App;