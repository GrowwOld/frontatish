import React from 'react';
import { View, Text } from 'react-native';
import { useColors } from '../../styles';

const Slider = () => {
  const Colors = useColors();
  return (
    <View>
      <Text style={{ color: Colors.font_1 }}>Slider component</Text>
    </View>
  );
};

export default Slider;
