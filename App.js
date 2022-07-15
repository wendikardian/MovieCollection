import React from 'react'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import TryCodeScreen from './src/screens/TryCodeScreen';

const App = () => {
  <SafeAreaProvider>
    <TryCodeScreen />
  </SafeAreaProvider>
}

export default App