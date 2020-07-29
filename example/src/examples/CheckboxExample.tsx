import React, { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { Checkbox, useColors } from 'supergroww';
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
      <Checkbox
        checked={tick}
        onPress={() => setTick(!tick)}
        containerStyle={{ marginVertical: 20 }}
      />
      <Checkbox
        checked={tick}
        onPress={() => setTick(!tick)}
        containerStyle={{ marginVertical: 20 }}
        size="md"
      />
      <Checkbox
        checked={tick}
        onPress={() => setTick(!tick)}
        containerStyle={{ marginVertical: 20 }}
        size="lg"
      />
      <Checkbox
        checked
        disabled
        onPress={() => setTick(!tick)}
        containerStyle={{ marginVertical: 20 }}
        size="lg"
      />
      <Checkbox
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
