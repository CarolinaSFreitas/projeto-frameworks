// AuthStack.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from './(screens)/Login'; // Importe seu componente de login

const AuthStack = createStackNavigator();

const AuthStackNavigator: React.FC = () => {
  // Função que retorna o componente LoginForm sem props adicionais
  const LoginScreen = () => <LoginForm onLogin={() => {}} />;

  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
