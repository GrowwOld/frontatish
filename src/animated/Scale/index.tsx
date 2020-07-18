import React, { useRef, useEffect, ReactNode } from 'react';
import { Animated } from 'react-native';

interface ScaleProps {
  children: ReactNode;
}
const Scale = (props: ScaleProps) => {
  const { children } = props;
  const animatedScale = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(animatedScale, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  });
  return (
    <Animated.View style={{ transform: [{ scale: animatedScale }] }}>
      {children}
    </Animated.View>
  );
};

export default Scale;
