import React, { useState } from 'react';
import { View, Text } from 'react-native';

// eslint-disable-next-line import/no-unresolved
import { RadioButton, useColors } from 'supergroww';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { Fonts, getColors } from '../styles';

const RadioButtonExample = () => {
  const Colors = useColors();
  // choosen will hold the value of selected radio button
  const [choosen, setChoosen] = useState('xtra small');
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
      <View style={{ margin: 20 }}>
        <RadioButton
          value="xtra small"
          onPress={radioPress}
          selected={choosen === 'xtra small'}
          containerStyle={{ marginVertical: 15 }}
          size="xs"
        />
        <RadioButton
          value="small"
          onPress={radioPress}
          selected={choosen === 'small'}
          containerStyle={{ marginVertical: 15 }}
          size="sm"
        />
        <RadioButton
          value="medium"
          onPress={radioPress}
          selected={choosen === 'medium'}
          containerStyle={{ marginVertical: 15 }}
          size="md"
        />
        <RadioButton
          value="large"
          onPress={radioPress}
          selected={choosen === 'large'}
          containerStyle={{ marginVertical: 15 }}
          labelStyle={{ color: Colors.font_2 }}
          size="lg"
        />
        {/* just for having a neat example ui display,
            these are not anyway important to the library
        */}
        <View style={{ height: 20, width: '100%' }} />
        <RadioButton
          disabled
          value="disable-selected"
          selected
          containerStyle={{ marginVertical: 10 }}
        />
        <RadioButton
          disabled
          value="disable-unselected"
          containerStyle={{ marginVertical: 10 }}
        />
        <RadioButton
          disabled
          // value="disable-selected"
          selected
          containerStyle={{ marginVertical: 10 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default RadioButtonExample;
