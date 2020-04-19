import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { getBgColorByType } from '../../utils';

const Button = (props: any) => {
  const { onPress, children, type } = props;
  const btnBgColor = getBgColorByType(type);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btnContainer, {
        backgroundColor: btnBgColor
      }]}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // define styles
  btnContainer: {
    flexDirection: 'row',
    backgroundColor: 'red',
    height: 50,
    marginVertical: 20,
  }
});

Button.defaultProps = {
  onPress: null,
  children: null,
  type: 'primary'
};

export default Button;
