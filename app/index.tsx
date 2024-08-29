// app/index.tsx
import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/IndexStyles'; // Importe os estilos do arquivo separado

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Meu Cabeçalho</Text>
      </View>
      <View style={styles.content}>
        {children}
      </View>
      <View style={styles.footer}>
        <Text>Meu Rodapé</Text>
      </View>
    </View>
  );
};

export default Layout;
