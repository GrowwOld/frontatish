import React, { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { CheckBox, useColors } from 'frontatish';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const CheckboxExample = () => {
  const [tick, setTick] = useState(false);
  const Colors = useColors();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TouchableWithoutFeedback onPress={() => setTick(!tick)}>
        <CheckBox checked={tick} containerStyle={{ marginVertical: 20 }} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => setTick(!tick)}>
        <CheckBox
          checked={tick}
          containerStyle={{ marginVertical: 20 }}
          size="md"
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => setTick(!tick)}>
        <CheckBox
          checked={tick}
          containerStyle={{ marginVertical: 20 }}
          size="lg"
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => setTick(!tick)}>
        <CheckBox
          checked
          disabled
          containerStyle={{ marginVertical: 20 }}
          size="lg"
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => setTick(!tick)}>
        <CheckBox
          checked={false}
          disabled
          containerStyle={{ marginVertical: 20 }}
          size="lg"
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => setTick(!tick)}>
        <CheckBox
          checked={tick}
          checkColor={Colors.primary}
          containerStyle={{
            marginVertical: 20,
            backgroundColor: Colors.white,
            borderWidth: 2,
            borderColor: Colors.primary,
          }}
          size="lg"
        />
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default CheckboxExample;
