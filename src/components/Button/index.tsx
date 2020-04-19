import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { getBtnBgColorByType, getBtnTextColorByType, getBtnBorderStyles } from '../../utils';
import { Colors, Fonts } from '../../styles';

const Button = (props: any) => {
  const { onPress, value, type } = props;
  const btnBgColor: string = getBtnBgColorByType(type);
  const btnTextColor: string = getBtnTextColorByType(type);
  const btnBorderStyle: any = getBtnBorderStyles(type);

  return (
    <TouchableOpacity
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
        {value}
      </Text>
    </TouchableOpacity>
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
  type: 'primary'
};

export default Button;
