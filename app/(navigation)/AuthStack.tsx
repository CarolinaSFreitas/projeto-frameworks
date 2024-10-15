// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import Login from '../(screens)/Login';
// import { useNavigation } from '@react-navigation/native';
// import LoginForm from '../(screens)/Login';

// const AuthStack = createStackNavigator();

// const AuthStackNavigator: React.FC = () => {
//     const navigation = useNavigation();

//     const handleLogin = (isLoggedIn: boolean) => {
//         if (isLoggedIn) {
//             navigation.navigate('Home'); // Navegar para a tela Home ao logar
//         }
//     };

//     return (
//         <AuthStack.Navigator screenOptions={{ headerShown: false }}>
//             <AuthStack.Screen name="Login" component={LoginScreen}>
               
//             </AuthStack.Screen>
//             {/* Adicione outras telas aqui se necessário */}
//         </AuthStack.Navigator>
//     );
// };

// export default AuthStackNavigator;
