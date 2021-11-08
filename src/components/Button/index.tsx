// base and lib imports
import React, { useState } from 'react';
import { Text, View, LayoutChangeEvent } from 'react-native';
import Ripple from 'react-native-material-ripple';

// utils and helpers
import { StyleType } from '../../common/types';
import { ButtonProps } from './types';
import { getBtnStyles, getLabelStyles } from './helper';

// styles and themes
import { useColors } from '../../themes';

import Progress from '../../animated/Progress';

const Button = (props: ButtonProps) => {
  const { customStyles, disabled, label, type, onPress, loading } = props;
  const [width, setWidth] = useState<number>(0);
  // getting the suitable color based on the theme
  // activated inside the app
  const Colors = useColors();
  // getting base button styles defined
  // by our design guidelines, component
  // also takes custom styles so that can also
  // be applied
  const baseBtnStyles: StyleType = getBtnStyles(type, Colors, disabled);
  const mainBtnStyles: StyleType = {
    ...baseBtnStyles,
    ...customStyles,
  };
  const baseLabelStyles: StyleType = getLabelStyles(type, Colors, disabled);
  const measureLayout = (e: LayoutChangeEvent) => {
    setWidth(e.nativeEvent.layout.width);
  };

  const renderProgressBar = () => {
    const barColor = type === 'primary' ? Colors.white : Colors.primary;
    return (
      <View
        style={{
          position: 'absolute',
          top: 0,
          borderRadius: 5,
        }}
      >
        <Progress width={width} barColor={barColor} />
      </View>
    );
  };

  return (
    <Ripple
      onPress={onPress}
      disabled={disabled || loading}
      style={mainBtnStyles}
      onLayout={measureLayout}
      accessibilityRole="button"
      accessibilityState={{ disabled: disabled || loading }}
      accessibilityLabel={label}
    >
      {loading && renderProgressBar()}
      <Text style={baseLabelStyles}>{label}</Text>
    </Ripple>
  );
};

// const styles = StyleSheet.create({
//   // define styles
//   // btnContainer: {
//   //   height: 50,
//   //   flex: 1,
//   //   marginVertical: 20,
//   //   borderRadius: 4,
//   //   alignItems: 'center',
//   //   justifyContent: 'center',
//   // },
//   // btnText: {
//   //   fontFamily: Fonts.type.gotham_medium,
//   //   fontSize: Fonts.size.regular_16,
//   //   fontWeight: 'bold',
//   // }
// });

Button.defaultProps = {
  children: null,
  disabled: false,
  label: '',
  loading: false,
  type: 'primary',
  onPress: null,
  customStyles: {},
};

export default Button;
