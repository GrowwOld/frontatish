import React from 'react';
import { View } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import { Slider, useColors } from 'supergroww';
import { SafeAreaView } from 'react-native-safe-area-context';

const SliderExample = () => {
  const Colors = useColors();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          margin: 40,
        }}
      >
        <Slider />
      </View>
    </SafeAreaView>
  );
};

export default SliderExample;
