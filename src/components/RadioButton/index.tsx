import React, { useRef, useEffect } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  Animated,
} from 'react-native';
import { RadioButtonProps } from './types';
import { useColors } from '../../themes';
import { DimensionType } from '../../common/types';

const RadioButton = (props: RadioButtonProps) => {
  const {
    disabled,
    onPress,
    selected,
    value,
    size,
    containerStyle,
    labelStyle,
  } = props;
  const [innerDimen, outerDimen] = getDimen(size!);
  const animatedZoom = useRef(new Animated.Value(selected ? 1 : 0)).current;
  const Colors = useColors();
  useEffect(() => {
    if (selected === false) {
      Animated.timing(animatedZoom, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [selected]);
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
    <TouchableWithoutFeedback onPress={onRadioPress} disabled={disabled}>
      <View style={[{ flexDirection: 'row' }, containerStyle]}>
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
          <Text style={[{ color: Colors.font_1 }, labelStyle]}>{value}</Text>
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
        width: 8,
        height: 8,
        borderRadius: 4,
      };
      outerDimen = {
        width: 16,
        height: 16,
        borderRadius: 8,
      };
      return [innerDimen, outerDimen];
    case 'md':
      innerDimen = {
        width: 10,
        height: 10,
        borderRadius: 5,
      };
      outerDimen = {
        width: 20,
        height: 20,
        borderRadius: 10,
      };
      return [innerDimen, outerDimen];
    case 'lg':
      innerDimen = {
        width: 12,
        height: 12,
        borderRadius: 6,
      };
      outerDimen = {
        width: 24,
        height: 24,
        borderRadius: 12,
      };
      return [innerDimen, outerDimen];
    default:
      return [innerDimen, outerDimen];
  }
};

const styles = StyleSheet.create({
  outerRing: {
    // width: 18,
    // height: 18,
    // borderRadius: 9,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelContainer: { marginHorizontal: 16 },
});
export default RadioButton;
