import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from '../(screens)/Login'; 
const AuthStack = createStackNavigator();

const AuthStackNavigator: React.FC = () => {
  const LoginScreen = () => <LoginForm onLogin={() => {}} />;

  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
