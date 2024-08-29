import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Navigation from './Navigation'; 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  content: {
    flex: 1,
  },
});

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.content}>
        children
      </View> */}
      <Navigation /> {/*navegação fixada no fundo */}
    </SafeAreaView>
  );
};

export default AppLayout;

