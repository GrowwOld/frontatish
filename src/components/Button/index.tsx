// base and lib imports
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ProgressBarAndroid } from '@react-native-community/progress-bar-android';
import Ripple from 'react-native-material-ripple';

// utils and helpers
import { getBtnStyles } from './helper';
import { ButtonProps } from './types';

// styles and themes
import { getColors } from '../../styles';

const Button = (props: ButtonProps) => {
  const { disabled, isDark, label, loading, type, onPress } = props;
  const Colors = getColors(isDark);
  // getting base button styles defined
  // by our guidelines, component also
  // takes custom styles so that can also
  // be applied
  const baseBtnStyles = getBtnStyles(type, Colors);
  console.log(baseBtnStyles);
  const renderProgressBar = () => (
    <View style={{
      position: 'absolute',
      width: '100%',
      top: -6,
      zIndex: 1
    }}
    >
      <ProgressBarAndroid
        indeterminate
        styleAttr="Horizontal"
        color={Colors.WHITE}
      />
    </View>
  );

  return (
    <Ripple
      onPress={onPress}
      disabled={disabled}
      style={baseBtnStyles}
      // style={[styles.btnContainer, {
      //   ...btnBorderStyle,
      //   backgroundColor: btnBgColor,
      // }]}
    >
      {loading && renderProgressBar()}
      <Text>
        {label}
      </Text>
    </Ripple>
  );
};

const styles = StyleSheet.create({
  // define styles
  // btnContainer: {
  //   height: 50,
  //   flex: 1,
  //   marginVertical: 20,
  //   borderRadius: 4,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // btnText: {
  //   fontFamily: Fonts.type.gotham_medium,
  //   fontSize: Fonts.size.regular_16,
  //   fontWeight: 'bold',
  // }
});

Button.defaultProps = {
  children: null,
  disabled: false,
  isDark: false,
  label: '',
  loading: false,
  type: 'primary',
  onPress: null,
};

export default Button;
