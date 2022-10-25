import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './routes';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from "redux-persist"
import { persist, store } from './store';
import { Provider } from "react-redux";

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={persist}>
          <Routes/>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  )
}

export default App;