import React, { useRef } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  Animated,
} from 'react-native';
import { RadioButtonProps } from './types';
import { Fonts, useColors } from '../../styles';
import { DimensionType } from '../../common/types';

const RadioButton = (props: RadioButtonProps) => {
  const animatedZoom = useRef(new Animated.Value(0)).current;
  const { disabled, onPress, selected, value, size } = props;
  const [innerDimen, outerDimen] = getDimen(size);
  const Colors = useColors();
  // this color is use for both inner and outer ring of radio
  const radioColor = disabled ? Colors.font_1 : Colors.primary;
  const onRadioPress = () => {
    // call onPress passed by user
    if (onPress) {
      onPress(value);
      Animated.timing(animatedZoom, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <TouchableWithoutFeedback
      style={styles.radioContainer}
      onPress={onRadioPress}
      disabled={disabled}
    >
      <View style={{ flexDirection: 'row' }}>
        <View
          style={[styles.outerRing, { ...outerDimen, borderColor: radioColor }]}
        >
          {selected && (
            <Animated.View
              style={{
                // opacity: animatedZoom,
                transform: [{ scale: animatedZoom }],
              }}
            >
              <View style={[innerDimen, { backgroundColor: radioColor }]} />
            </Animated.View>
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
      </View>
    </TouchableWithoutFeedback>
  );
};

const getDimen = (size: DimensionType) => {
  let outerDimen = {
    width: 14,
    height: 14,
    borderRadius: 7,
  };
  let innerDimen = {
    width: 8,
    height: 8,
    borderRadius: 5,
  };
  switch (size) {
    case 'xs':
      return [innerDimen, outerDimen];
    case 'sm':
      innerDimen = {
        width: 10,
        height: 10,
        borderRadius: 5,
      };
      outerDimen = {
        width: 18,
        height: 18,
        borderRadius: 9,
      };
      return [innerDimen, outerDimen];
    case 'md':
      innerDimen = {
        width: 12,
        height: 12,
        borderRadius: 6,
      };
      outerDimen = {
        width: 20,
        height: 20,
        borderRadius: 10,
      };
      return [innerDimen, outerDimen];
    case 'lg':
      innerDimen = {
        width: 14,
        height: 14,
        borderRadius: 7,
      };
      outerDimen = {
        width: 22,
        height: 22,
        borderRadius: 11,
      };
      return [innerDimen, outerDimen];
    default:
      return [innerDimen, outerDimen];
  }
};

const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  outerRing: {
    // width: 18,
    // height: 18,
    // borderRadius: 9,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelContainer: { marginHorizontal: 10, marginTop: -2 },
});
export default RadioButton;
