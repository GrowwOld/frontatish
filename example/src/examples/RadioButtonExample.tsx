import React, { useState } from 'react';
import { View, Text } from 'react-native';

// eslint-disable-next-line import/no-unresolved
import { RadioButton, useColors } from 'supergroww';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { Fonts, getColors } from '../styles';

const RadioButtonExample = () => {
  const Colors = useColors();
  // choosen will hold the value of selected radio button
  const [choosen, setChoosen] = useState('selected');
  const radioPress = (value: string) => {
    setChoosen(value);
  };
  // const Colors = getColors(isDark);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.white,
        justifyContent: 'center',
      }}
    >
      <Text style={{ color: Colors.font_1, margin: 20 }}>
        {`Selected Value is ${choosen}`}
      </Text>
      <View style={{ margin: 20, flexDirection: 'row', flexWrap: 'wrap' }}>
        <RadioButton
          value="selected"
          onPress={radioPress}
          selected={choosen === 'selected'}
        />
        <RadioButton
          value="option-1"
          onPress={radioPress}
          selected={choosen === 'option-1'}
        />
        <RadioButton
          value="option-2"
          onPress={radioPress}
          selected={choosen === 'option-2'}
        />
        <RadioButton
          value="option-3"
          onPress={radioPress}
          selected={choosen === 'option-3'}
        />
        {/* just for having a neat example ui display,
            these are not anyway important to the library
        */}
        <View style={{ height: 20, width: '100%' }} />
        <RadioButton disabled value="disable-selected" selected />
        <RadioButton disabled value="disable-unselected" />
      </View>
    </SafeAreaView>
  );
};

export default RadioButtonExample;
