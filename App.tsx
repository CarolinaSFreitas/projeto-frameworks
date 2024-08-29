import React from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import Layout from './app/index'; 

const appName = 'my-app';

const App = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text>Conteúdo Principal</Text>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent(appName, () => App);

export default App;
