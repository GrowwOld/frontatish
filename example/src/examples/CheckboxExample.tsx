import React, { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { CheckBox, useColors } from 'frontatish';
import { SafeAreaView } from 'react-native-safe-area-context';

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
      <CheckBox
        checked={tick}
        onPress={() => setTick(!tick)}
        containerStyle={{ marginVertical: 20 }}
      />
      <CheckBox
        checked={tick}
        onPress={() => setTick(!tick)}
        containerStyle={{ marginVertical: 20 }}
        size="md"
      />
      <CheckBox
        checked={tick}
        onPress={() => setTick(!tick)}
        containerStyle={{ marginVertical: 20 }}
        size="lg"
      />
      <CheckBox
        checked
        disabled
        onPress={() => setTick(!tick)}
        containerStyle={{ marginVertical: 20 }}
        size="lg"
      />
      <CheckBox
        checked={false}
        disabled
        onPress={() => setTick(!tick)}
        containerStyle={{ marginVertical: 20 }}
        size="lg"
      />
    </SafeAreaView>
  );
};

export default CheckboxExample;
