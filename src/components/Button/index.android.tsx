// base and lib imports
import * as React from 'react';
import { Text, View } from 'react-native';
import { ProgressBarAndroid } from '@react-native-community/progress-bar-android';
import Ripple from 'react-native-material-ripple';

// utils and helpers
import { StyleType } from '../../common/types';
import { ButtonProps } from './types';
import { getBtnStyles, getLabelStyles } from './helper';

// styles and themes
import { getColors } from '../../styles';

const Button = (props: ButtonProps) => {
  const {
    customStyles,
    disabled,
    isDark,
    label,
    loading,
    type,
    onPress,
  } = props;
  // getting the suitable color based on the theme
  // activated inside the app
  const Colors = getColors(isDark);
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
  const renderProgressBar = () => (
    <View
      style={{
        position: 'absolute',
        width: '100%',
        top: -6,
        zIndex: 1,
      }}
    >
      <ProgressBarAndroid
        indeterminate
        styleAttr="Horizontal"
        color={Colors.CONSTANT_WHITE}
      />
    </View>
  );

  return (
    <Ripple
      onPress={onPress}
      disabled={disabled}
      style={mainBtnStyles}
      // style={[styles.btnContainer, {
      //   ...btnBorderStyle,
      //   backgroundColor: btnBgColor,
      // }]}
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
