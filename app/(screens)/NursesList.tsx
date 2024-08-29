import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import stylesNurses from '../../styles/NursesStyles';

const NursesList: React.FC = () => {
  return (
    <View style={stylesNurses.container}>
      <Text>Nurses List Screen</Text>
    </View>
  );
};

export default NursesList;
