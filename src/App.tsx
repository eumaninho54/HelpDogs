import React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Onboarding } from './pages/onboarding';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <Onboarding/>
    </SafeAreaProvider>
  )
}

export default App;