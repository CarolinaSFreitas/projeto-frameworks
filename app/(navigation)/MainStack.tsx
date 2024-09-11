import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../(screens)/Home'; 
import NursesList from '../(screens)/NursesList';
import UserProfile from '../(screens)/UserProfile';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const MainStackNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: string | undefined;

          if (route.name === 'NursesList') {
            iconName = 'user-nurse';
            return <FontAwesome6 name={iconName} size={size} color={color} />;
          } else if (route.name === 'UserProfile') {
            iconName = 'user-alt';
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          } else if (route.name === 'Home') {
            iconName = 'home';
            return <MaterialCommunityIcons name={iconName as any} size={size} color={color} />;
          }

          return null;
        },
        headerShown: false, //oculta a barra de navegacao superior (header)
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="NursesList" component={NursesList} />
      <Tab.Screen name="UserProfile" component={UserProfile} />
    </Tab.Navigator>
  );
};

export default MainStackNavigator;
