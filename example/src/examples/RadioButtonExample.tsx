import React, { useState } from 'react';
import { View, Text } from 'react-native';

// eslint-disable-next-line import/no-unresolved
import { RadioButton } from 'supergroww';
// import { Fonts, getColors } from '../styles';

interface RadioButtonExampleProps {
  isDark: boolean;
}

const RadioButtonExample = (props: RadioButtonExampleProps) => {
  // choosen will hold the value of selected radio button
  const [choosen, setChoosen] = useState('selected');
  const { isDark } = props;
  const radioPress = (value: string) => {
    setChoosen(value);
  };
  // const Colors = getColors(isDark);
  return (
    <View style={{ flex: 1, margin: 20 }}>
      <Text style={[]}>RadioButton Examples</Text>
      <Text style={[]}>{`Selected Value is ${choosen}`}</Text>
      <View
        style={{ marginVertical: 20, flexDirection: 'row', flexWrap: 'wrap' }}
      >
        <RadioButton
          isDark={isDark}
          value="selected"
          onPress={radioPress}
          selected={choosen === 'selected'}
        />
        <RadioButton
          isDark={isDark}
          value="option-1"
          onPress={radioPress}
          selected={choosen === 'option-1'}
        />
        <RadioButton
          isDark={isDark}
          value="option-2"
          onPress={radioPress}
          selected={choosen === 'option-2'}
        />
        <RadioButton
          isDark={isDark}
          value="option-3"
          onPress={radioPress}
          selected={choosen === 'option-3'}
        />
        {/* just for having a neat example ui display,
            these are not anyway important to the library
        */}
        <View style={{ height: 20, width: '100%' }} />
        <RadioButton
          disabled
          isDark={isDark}
          value="disable-selected"
          selected
        />
        <RadioButton disabled isDark={isDark} value="disable-unselected" />
      </View>
    </View>
  );
};

export default RadioButtonExample;
