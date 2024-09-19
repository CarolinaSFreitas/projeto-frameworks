import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Navigation from './(navigation)/Navigation'; 

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
      {}
      <Navigation /> {}
    </SafeAreaView>
  );
};

export default AppLayout;

