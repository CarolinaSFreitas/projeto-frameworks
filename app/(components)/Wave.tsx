import React from 'react';
import { View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface WaveProps {
  customStyles?: ViewStyle;
}

const Wave: React.FC<WaveProps> = ({ customStyles }) => {
  return (
    <View style={customStyles}>
      <View style={{ backgroundColor: '#C98EE7', height: 140 }}>
        <Svg
          height="60%"
          width="100%"
          viewBox="0 0 1440 320"
          style={{ position: 'absolute', top: 130 }}
        >
          {}
        </Svg>
      </View>
    </View>
  );
};

export default Wave;
