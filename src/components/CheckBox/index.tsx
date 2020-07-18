import React from 'react';
// eslint-disable-next-line import/no-unresolved
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useColors } from '../../themes';
import { CheckBoxProps } from './types';

const Checkbox = (props: CheckBoxProps) => {
  const { checked, containerStyle, disabled, onPress } = props;
  const Colors = useColors();
  const getRequiredColor = () => {
    if (disabled) {
      return [Colors.font_2, Colors.font_3, Colors.font_3];
    }
    if (!disabled && checked) {
      return [Colors.primary, Colors.primary, Colors.white];
    }
    return [Colors.white, Colors.primary];
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
