import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppLayout from './app/_layout'; 

const App = () => {
  return (
    <AppLayout>
      <View style={styles.container}>
       
      </View>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
