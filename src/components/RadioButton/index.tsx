// base and lib imports
import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native';

// types
import { RadioButtonProps } from './types';

// utils and helpers
import { getRadioDmnsn } from '../../common/utils';

// styles and themes
import { useColors } from '../../themes';

// common components
import { Scale } from '../../animated';

class InsideView extends React.PureComponent<{
  selected: boolean;
  innerDimen: any;
  radioColor: any;
}> {
  render() {
    const { selected, innerDimen, radioColor } = this.props;
    return (
      <Scale scale={selected}>
        <View style={[innerDimen, { backgroundColor: radioColor }]} />
      </Scale>
    );
  }
}
const RadioButton = (props: RadioButtonProps) => {
  const {
    disabled,
    onPress,
    selected,
    value,
    customLabel,
    size,
    containerStyle,
    labelStyle,
  } = props;
  const [innerDimen, outerDimen] = getRadioDmnsn(size!);

  const Colors = useColors();
  // this color is use for both inner and outer ring of radio
  const radioColor = disabled ? Colors.font_3 : Colors.primary;
  const onRadioPress = () => {
    // call onPress passed by user
    if (onPress) {
      onPress(value!!);
    }
  };
  const renderValue = () => {
    if (customLabel) return customLabel;
    if (value) {
      return (
        <View style={styles.labelContainer}>
          <Text style={[{ color: Colors.font_1 }, labelStyle]}>{value}</Text>
        </View>
      );
    }
    return null;
  };
  return (
    <TouchableWithoutFeedback
      onPress={onRadioPress}
      disabled={disabled}
      accessibilityRole="radio"
      accessibilityState={{ selected: selected, disabled }}
    >
      <View style={[{ flexDirection: 'row' }, containerStyle]}>
        <View
          style={[styles.outerRing, { ...outerDimen, borderColor: radioColor }]}
        >
          <InsideView
            selected={selected!}
            innerDimen={innerDimen}
            radioColor={radioColor}
          />
        </View>
        {renderValue()}
      </View>
    </TouchableWithoutFeedback>
  );
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
