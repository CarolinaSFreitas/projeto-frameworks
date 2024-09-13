import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../(screens)/Home'; 
import NursesList from '../(screens)/ProfList';
import UserProfile from '../(screens)/UserProfile';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const Navigation: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: string | undefined;

          if (route.name === 'Profissionais') {
            iconName = 'user-nurse';
            return <FontAwesome6 name={iconName} size={size} color={color} />;
          } else if (route.name === 'Perfil') {
            iconName = 'user-alt';
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          } else if (route.name === 'Home') {
            iconName = 'home';
            return <MaterialCommunityIcons name={iconName as any} size={size} color={color} />;
          }

          return null;
        },
        headerShown: false,
        tabBarActiveTintColor: '#C98EE7', // Cor dos ícones quando a aba está selecionada
        tabBarInactiveTintColor: 'gray', // Cor dos ícones quando a aba não está selecionada
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profissionais" component={NursesList} />
      <Tab.Screen name="Perfil" component={UserProfile} />
    </Tab.Navigator>
  );
};

export default Navigation;
