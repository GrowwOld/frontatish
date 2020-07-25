import React, { useRef, useEffect, ReactNode } from 'react';
import { Animated } from 'react-native';

interface ScaleProps {
  children: ReactNode;
}
const Scale = (props: ScaleProps) => {
  const { children } = props;
  const animatedScale = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    console.log('start animation');
    Animated.timing(animatedScale, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);
  console.log("animated value",animatedScale)
  return (
    <Animated.View
      style={{
        transform: [
          {
            scale: animatedScale.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            }),
          },
        ],
      }}
    >
      {children}
    </Animated.View>
  );
};

export default Scale;
