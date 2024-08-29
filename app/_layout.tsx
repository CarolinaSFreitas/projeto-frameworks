// app/_layout.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Define other screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Render your content here */}
    </View>
  );
};

export default AppLayout;
