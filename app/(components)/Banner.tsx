import React, { useState, useEffect } from 'react'; 
import { View, ViewStyle, StyleSheet, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface WaveProps {
  customStyles?: ViewStyle;
}

const Wave: React.FC<WaveProps> = ({ customStyles }) => {
  const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);

  useEffect(() => {
    const updateDimensions = () => {
      const { width } = Dimensions.get('window');
      setWindowWidth(width);
    };
  
    const subscription = Dimensions.addEventListener('change', updateDimensions);

    return () => {
      subscription.remove(); 
    };
  }, []);

  const svgHeight = 320;
  const svgWidth = Math.max(windowWidth, 1440);

  return (
    <View style={[styles.container, customStyles]}>
      <View style={styles.waveBackground}>
        <Svg
          width={svgWidth}
          height={svgHeight}
          viewBox="0 0 1440 320"
          preserveAspectRatio="xMidYMid slice"
          style={styles.svg}
        >
          <Path
            fill="#FFFFFF"
            d="M0,160L30,149.3C60,139,120,117,180,128C240,139,300,181,360,181.3C420,181,480,139,540,128C600,117,660,139,720,149.3C780,160,840,160,900,144C960,128,1020,96,1080,80C1140,64,1200,64,1260,96C1320,128,1380,192,1440,213.3L1500,234V320H1440V213.3C1380,192,1320,128,1260,96C1200,64,1140,64,1080,80C1020,96,960,128,900,144C840,160,780,160,720,149.3C660,139,600,117,540,128C480,139,420,181,360,181.3C300,181,240,139,180,128C120,117,60,139,30,149.3L0,160Z"
          />
        </Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 140,
    overflow: 'hidden',
  },
  waveBackground: {
    backgroundColor: '#C98EE7',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
  svg: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});

export default Wave;