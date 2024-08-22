import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import styles from '../../../assets/styles/stylesHome';
import { useRouter } from 'expo-router';

export default function Index() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  const router = useRouter();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Projeto de Frameworks para Desenv. Web I</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('./contatos')}>
          <Text style={styles.buttonText}>Veja seus Contatos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
