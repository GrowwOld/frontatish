import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { getColors } from '../../styles';
import { CheckBoxProps } from './types';

const Checkbox = (props: CheckBoxProps) => {
  const { checked, isDark, onPress } = props;
  const Colors = getColors(isDark);
  const borderColor = Colors.GREEN_BLUE;
  const backgroundColor = checked ? Colors.GREEN_BLUE : Colors.CONSTANT_WHITE;
  const iconColor = checked ? Colors.CONSTANT_WHITE : '';
  return (
    <TouchableOpacity
      style={[
        styles.boxContainer,
        {
          borderColor,
          backgroundColor,
        },
      ]}
      onPress={onPress}
    >
      {checked && <Icon name="check" size={16} color={iconColor} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Checkbox;
