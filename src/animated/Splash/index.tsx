import React, { useRef, useEffect } from 'react';
import { View, Animated, useWindowDimensions } from 'react-native';
import { Fonts } from '../../styles';
import { useColors } from '../../themes';

const Splash = () => {
  const Colors = useColors();
  const x = useWindowDimensions().width / 2 - 40;
  const y = useWindowDimensions().height / 2 - 80;
  const animatedLogo = useRef(new Animated.ValueXY()).current;
  const opacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.timing(animatedLogo, {
        toValue: { x: -x, y: -y },
        duration: 3000,
        useNativeDriver: true,
      }),
    ]).start(() => {});
  });
  const logo = {
    top: 0,
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: Colors.primary,
  };
  const logoName = {
    fontSize: Fonts.size.h2,
    color: Colors.font_2,
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.View
        style={[
          logo,
          {
            transform: [
              { translateX: animatedLogo.x },
              { translateY: animatedLogo.y },
              {
                scale: opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [2, 0.7],
                }),
              },
            ],
          },
        ]}
      />
      <Animated.Text style={[logoName, { opacity }]}>BrandName</Animated.Text>
    </View>
  );
};

export default Splash;
