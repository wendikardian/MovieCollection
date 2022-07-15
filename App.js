import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TryCodeScreen from './src/screens/TryCodeScreen';
import HomeScreen from './src/screens/HomeScreen.js'

const App = () => {
  return(
    <SafeAreaProvider>
      <TryCodeScreen />
    </SafeAreaProvider>
  )
  
}

export default App