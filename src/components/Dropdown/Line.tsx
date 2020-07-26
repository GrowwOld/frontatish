import React from 'react';
import { View } from 'react-native';
import { useColors } from '../../themes';

const Line = (props) => {
  const Colors = useColors();
  const { style } = props;
  return (
    <View style={{ height: 1, backgroundColor: Colors.font_5, ...style }} />
  );
};

export default Line;
