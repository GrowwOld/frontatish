import React, { useState, useCallback } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// eslint-disable-next-line import/no-unresolved
import { RadioButton, useColors, RadioGroup } from 'frontatish';
import { SafeAreaView } from 'react-native-safe-area-context';
import { scaleDimension } from '../../../src/common/utils';
// import { Fonts, getColors } from '../styles';

const RadioButtonExample = (props: { navigation: any }) => {
  const Colors = useColors();
  // choosen will hold the value of selected radio button
  const [choosen, setChoosen] = useState('xtra small');
  const [radioGroupText, setRadioGroupText] = useState('value1');
  const radioPress = (value: string) => {
    setChoosen(value);
  };
  const onChangeRadioGroup = (selectedValue: string) =>
    setRadioGroupText(selectedValue);
  // const Colors = getColors(isDark);
  const goBack = useCallback(() => props.navigation.pop(), []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.white,
        justifyContent: 'center',
      }}
    >
      <Icon
        name="arrow-back"
        size={20}
        style={{ margin: 20 }}
        onPress={goBack}
      />
      <Text style={{ margin: 20, fontWeight: 'bold' }}>
        Normal Radio Button
      </Text>
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
        <View style={{ height: scaleDimension(20, 'height'), width: '100%' }} />
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
          customLabel={<Text>Vinit</Text>}
          // value="disable-selected"
          selected
          containerStyle={{ marginVertical: 10 }}
        />

        <Text
          style={{
            marginVertical: 20,
            fontWeight: 'bold',
            color: Colors.font_1,
          }}
        >
          RadioGroup
        </Text>
        <Text
          style={{ marginBottom: 20, color: Colors.font_1 }}
        >{`Selected Value: ${radioGroupText}`}</Text>

        <RadioGroup
          onChange={onChangeRadioGroup}
          defaultValue="value1"
          containerStyle={{ marginVertical: 5 }}
        >
          <RadioButton value="value1" />
          <RadioButton value="value2 (small)" size="xs" />
          <RadioButton value="value3 (disabled)" disabled />
        </RadioGroup>
      </View>
    </SafeAreaView>
  );
};

export default RadioButtonExample;
