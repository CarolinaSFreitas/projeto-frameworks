import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import AppLayout from './app/_layout';
import Login from './app/(components)/Login';
import * as Font from 'expo-font';

const loadFonts = () => {
  return Font.loadAsync({
    'poppins-regular': require('./assets/fonts/Poppins/Poppins-Regular.ttf'),
    'poppins-bold': require('./assets/fonts/Poppins/Poppins-Bold.ttf'),
    'poppins-extra-bold': require('./assets/fonts/Poppins/Poppins-ExtraBold.ttf'),
    'poppins-medium': require('./assets/fonts/Poppins/Poppins-Medium.ttf'),
    'poppins-light': require('./assets/fonts/Poppins/Poppins-Light.ttf'),
    'poppings-extra-light': require('./assets/fonts/Poppins/Poppins-ExtraLight.ttf'),
  });
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts()
      .then(() => setFontsLoaded(true))
      .catch((error) => console.log('Error loading fonts', error));
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator style={styles.loading} />;
  }

  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        <AppLayout children={undefined} />
      ) : (
        <Login onLogin={setIsLoggedIn} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
