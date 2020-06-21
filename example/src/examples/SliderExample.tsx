import React from 'react';
import {} from 'react-native';
// eslint-disable-next-line import/no-unresolved
import { Slider } from 'supergroww';
import { SafeAreaView } from 'react-native-safe-area-context';

const SliderExample = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Slider />
    </SafeAreaView>
  );
};

export default SliderExample;
