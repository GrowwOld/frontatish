// base and lib imports
import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import Ripple from 'react-native-material-ripple';

// utils and helpers
import { getBtnBgColorByType, getBtnTextColorByType, getBtnBorderStyles } from '../../common/utils';
import { ButtonProps } from './types';

// styles and themes
import { Fonts } from '../../styles';

const Button = (props: ButtonProps) => {
  const { onPress, label, type } = props;
  const btnBgColor: string = getBtnBgColorByType(type);
  const btnTextColor: string = getBtnTextColorByType(type);
  const btnBorderStyle: any = getBtnBorderStyles(type);

  return (
    <Ripple
      onPress={onPress}
      style={[styles.btnContainer, {
        ...btnBorderStyle,
        backgroundColor: btnBgColor,
      }]}
    >
      <Text
        style={[styles.btnText, {
          color: btnTextColor
        }]}
      >
        {label}
      </Text>
    </Ripple>
  );
};

const styles = StyleSheet.create({
  // define styles
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'red',
    height: 50,
    marginVertical: 20,
    borderRadius: 4,
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
  label: ''
};

export default Button;
