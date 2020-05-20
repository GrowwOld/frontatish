import React from 'react';
// eslint-disable-next-line import/no-unresolved
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { getColors } from '../../styles';
import { CheckBoxProps } from './types';

const Checkbox = (props: CheckBoxProps) => {
  const { checked, containerStyle, disabled, isDark, onPress } = props;
  const Colors = getColors(isDark);
  const getRequiredColor = () => {
    if (disabled) {
      return [Colors.SILVER, Colors.SLATE_GREY, Colors.SLATE_GREY];
    }
    if (!disabled && checked) {
      return [Colors.GREEN_BLUE, Colors.GREEN_BLUE, Colors.CONSTANT_WHITE];
    }
    return [Colors.WHITE, Colors.GREEN_BLUE];
  };
  const [backgroundColor, borderColor, iconColor] = getRequiredColor();
  const mainContainerStyle = {
    ...styles.boxContainer,
    backgroundColor,
    borderColor,
    // giving preference to custom styles
    ...containerStyle,
  };
  return (
    <TouchableOpacity
      disabled={disabled}
      style={mainContainerStyle}
      onPress={onPress}
    >
      {checked && <Icon name="check" size={13} color={iconColor} />}
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
