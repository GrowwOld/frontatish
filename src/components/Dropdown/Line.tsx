import React from 'react';
import { View } from 'react-native';
import { useColors } from '../../themes';

const Line = () => {
  const Colors = useColors();
  return <View style={{ height: 1, backgroundColor: Colors.font_5 }} />;
};

export default Line;
