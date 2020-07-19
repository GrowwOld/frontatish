import React, { useState } from 'react';
import { View, Text } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import { Slider, useColors } from 'supergroww';
import { SafeAreaView } from 'react-native-safe-area-context';

const SliderExample = () => {
  const Colors = useColors();
  const [value, setValue] = useState(0);
  const setSliderValue = (sliderValue: number) => {
    setValue(sliderValue);
  };
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
        <Text
          style={{ fontSize: 30, color: Colors.font_1, marginVertical: 20 }}
        >
          {value}
        </Text>
        <Slider maxValue={100} minValue={0} setValue={setSliderValue} />
      </View>
    </SafeAreaView>
  );
};

export default SliderExample;
