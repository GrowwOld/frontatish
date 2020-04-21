// base and lib imports
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ProgressBarAndroid } from '@react-native-community/progress-bar-android';
import Ripple from 'react-native-material-ripple';

// utils and helpers
import {
  getBtnBgColorByType,
  getBtnTextColorByType,
  getBtnBorderStyles
} from './helper';
import { ButtonProps } from './types';

// styles and themes
import { Fonts, Colors } from '../../styles';

const Button = (props: ButtonProps) => {
  const { onPress, label, type, loading } = props;
  const btnBgColor: string = getBtnBgColorByType(type);
  const btnTextColor: string = getBtnTextColorByType(type);
  const btnBorderStyle: any = getBtnBorderStyles(type);

  const renderProgressBar = () => {
    if (loading) {
      return (
        <View style={{ position: 'absolute', width: '100%', top: -6, zIndex: 1 }}>
          <ProgressBarAndroid
            indeterminate
            styleAttr="Horizontal"
            color={Colors.WHITE}
          />
        </View>


      );
    }
    return null;
  };

  return (
    <Ripple
      onPress={onPress}
      style={[styles.btnContainer, {
        ...btnBorderStyle,
        backgroundColor: btnBgColor,
      }]}
    >
      {loading && renderProgressBar()}
      <Text style={[styles.btnText, { color: btnTextColor }]}>
        {label}
      </Text>
    </Ripple>
  );
};

const styles = StyleSheet.create({
  // define styles
  btnContainer: {
    height: 50,
    marginVertical: 20,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontFamily: Fonts.type.gotham_medium,
    fontSize: Fonts.size.regular_16,
    fontWeight: 'bold',
  }
});

Button.defaultProps = {
  onPress: null,
  children: null,
  type: 'primary',
  label: '',
  loading: true
};

export default Button;
