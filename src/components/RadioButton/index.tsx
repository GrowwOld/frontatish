import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Fonts, useColors } from '../../styles';
import { RadioButtonProps } from './types';

const RadioButton = (props: RadioButtonProps) => {
  const { disabled, onPress, selected, value } = props;
  const Colors = useColors();
  // this color is use for both inner and outer ring of radio
  const radioColor = disabled ? Colors.font_1 : Colors.primary;
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
            color: Colors.font_1,
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
