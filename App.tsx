/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import LegalScreen from './src/screens/LegalScreen';
import {ColorsCustom} from './src/utils/Colors';

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: ColorsCustom.background,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <LegalScreen />
    </SafeAreaView>
  );
}

export default App;
