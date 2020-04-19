import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { getBgColorByType } from '../../utils';
import { Colors, Fonts } from '../../styles';

const Button = (props: any) => {
  const { onPress, value, type } = props;
  const btnBgColor = getBgColorByType(type);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btnContainer, {
        backgroundColor: btnBgColor
      }]}
    >
      <Text>
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
    fontSize: Fonts.size.h1,
    color: Colors.WHITE,
    fontWeight: '500'
  }
});

Button.defaultProps = {
  onPress: null,
  children: null,
  type: 'primary'
};

export default Button;
