import React from 'react';
import {} from 'react-native';
// eslint-disable-next-line import/no-unresolved
import { Slider, useColors } from 'supergroww';
import { SafeAreaView } from 'react-native-safe-area-context';

const SliderExample = () => {
  const Colors = useColors();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <Slider />
    </SafeAreaView>
  );
};

export default SliderExample;
