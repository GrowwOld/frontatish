import * as React from 'react';
import { TouchableOpacity } from 'react-native';

const Button = (props: any) => {
  const { onPress, children } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
