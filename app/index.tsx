// pages/Index.tsx
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

export default function Index() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.gradientContainer}>
        <Text style={styles.gradientText}>Projeto de Frameworks para Desenv. Web I</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  gradientContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 100,
  },
  gradientText: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Poppins_700Bold', // Use a fonte carregada
  },
});
