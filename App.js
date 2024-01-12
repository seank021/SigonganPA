import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import Navigation from '@navigation/Navigation';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  });

  return (
    <Navigation />
  );
}

export default App;