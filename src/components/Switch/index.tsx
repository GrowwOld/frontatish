import React, { useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, Animated } from 'react-native';
import { SwitchProps } from './types';

const Switch = (props: SwitchProps) => {
  const {
    size,
    isOn,
    onColor,
    offColor,
    disabled,
    onToggle,
    trackOffStyle,
    trackOnStyle,
    thumbOnStyle,
    thumbOffStyle,
    icon,
  } = props;
  const offsetX = useRef(new Animated.Value(0)).current;
  const dimensions = calculateDimensions(size || '');
  const toValue = isOn ? dimensions.width - dimensions.translateX : 0;
  Animated.timing(offsetX, {
    toValue,
    duration: 300,
    useNativeDriver: true,
  }).start();
  const styles = getStyles();
  const toggleSwitchStyle = [
    styles.toggleSwitchStyle,
    {
      width: dimensions.width,
      padding: dimensions.padding,
      backgroundColor: isOn ? onColor : offColor,
      ...(isOn ? trackOnStyle : trackOffStyle),
    },
  ];

  const insideCircleStyle = [
    styles.insideCircleStyle,
    {
      transform: [{ translateX: offsetX }],
      width: dimensions.circleWidth,
      height: dimensions.circleHeight,
      borderRadius: dimensions.circleWidth / 2,
      ...(isOn ? thumbOnStyle : thumbOffStyle),
    },
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={toggleSwitchStyle}
        activeOpacity={0.8}
        onPress={() => (disabled ? null : onToggle())}
      >
        <Animated.View style={insideCircleStyle}>{icon}</Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const calculateDimensions = (size: string) => {
  switch (size) {
    case 'sm':
      return {
        width: 40,
        padding: 10,
        circleWidth: 15,
        circleHeight: 15,
        translateX: 22,
      };
    case 'lg':
      return {
        width: 70,
        padding: 20,
        circleWidth: 30,
        circleHeight: 30,
        translateX: 38,
      };
    default:
      return {
        width: 46,
        padding: 12,
        circleWidth: 18,
        circleHeight: 18,
        translateX: 26,
      };
  }
};

Switch.defaultProps = {
  isOn: false,
  onColor: '#00D09C',
  offColor: '#EBEBF5',
  size: 'medium',
  labelStyle: {},
  thumbOnStyle: {},
  thumbOffStyle: {},
  trackOnStyle: {},
  trackOffStyle: {},
  icon: null,
  disabled: false,
};

const getStyles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    labelStyle: { marginHorizontal: 10 },
    toggleSwitchStyle: {
      justifyContent: 'center',
      borderRadius: 20,
    },
    insideCircleStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      margin: 4,
      position: 'absolute',
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 2.5,
      elevation: 1.5,
    },
  });
};

export default Switch;
