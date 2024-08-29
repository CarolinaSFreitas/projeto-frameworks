import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import styles from '../../styles/FooterStyles';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../(components)/types'; 

type FooterNavigationProp = NavigationProp<RootStackParamList>;

const Footer: React.FC = () => {
  const navigation = useNavigation<FooterNavigationProp>();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('NursesList')}>
        <FontAwesome6 name="user-nurse" size={24} color="black" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Home')}>
        <MaterialCommunityIcons name="home" size={24} color="black" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('UserProfile')}>
        <FontAwesome5 name="user-alt" size={24} color="black" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
