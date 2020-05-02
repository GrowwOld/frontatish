import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Fonts, getColors } from '../../styles';
import { RadioButtonProps } from './types';

const RadioButton = (props: RadioButtonProps) => {
  const { disabled, isDark, onPress, selected, value } = props;
  const Colors = getColors(isDark);
  // this color is use for both inner and outer ring of radio
  const radioColor = disabled ? Colors.GRAY : Colors.GREEN_BLUE;
  return (
    <TouchableOpacity
      style={styles.radioContainer}
      onPress={onPress ? () => onPress(value) : () => {}}
      disabled={disabled}
    >
      <View style={[styles.outerRing, { borderColor: radioColor }]}>
        {selected && (
          <View style={[styles.innerRing, { backgroundColor: radioColor }]} />
        )}
      </View>
      <View style={styles.labelContainer}>
        <Text
          style={{
            fontFamily: Fonts.type.gotham_book,
            fontSize: Fonts.size.small_13,
            color: Colors.BLACK_DARK,
          }}
        >
          {value}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'grey',
  },
  outerRing: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  innerRing: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  labelContainer: { marginHorizontal: 10, marginTop: -2 },
});
export default RadioButton;
