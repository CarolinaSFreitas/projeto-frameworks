import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import Login from './app/(screens)/Login';
import Signup from './app/(screens)/Signup';
import Navigation from './app/Navigation'; // Atualize o caminho conforme necessário

const Stack = createStackNavigator();

const loadFonts = () => {
  return Font.loadAsync({
    'poppins-regular': require('./assets/fonts/Poppins/Poppins-Regular.ttf'),
    'poppins-bold': require('./assets/fonts/Poppins/Poppins-Bold.ttf'),
    'poppins-extra-bold': require('./assets/fonts/Poppins/Poppins-ExtraBold.ttf'),
    'poppins-medium': require('./assets/fonts/Poppins/Poppins-Medium.ttf'),
    'poppins-light': require('./assets/fonts/Poppins/Poppins-Light.ttf'),
    'poppins-extra-light': require('./assets/fonts/Poppins/Poppins-ExtraLight.ttf'),
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
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <Stack.Screen name="AppLayout" component={Navigation} />
        ) : (
          <>
            <Stack.Screen name="Login">
              {(props) => <Login {...props} onLogin={setIsLoggedIn} />}
            </Stack.Screen>
            <Stack.Screen name="Signup" component={Signup} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
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
