import Ripple from 'react-native-material-ripple';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { ChipProps } from './types';

const Chip = (props: ChipProps) => {
  const { label, disabled, onPress, style } = props;

  return (
    <Ripple
      style={[styles.container, style]}
      rippleContainerBorderRadius={20}
      onPress={disabled ? null : onPress}
    >
      <Text style={styles.label}>{label}</Text>
    </Ripple>
  );
};

Chip.defaultProps = {
  label: 'Chip',
  disabled: false,
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: '#ECEDEF',
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  label: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 12,
    letterSpacing: 0.01,
    lineHeight: 19,
  },
});

export default Chip;
