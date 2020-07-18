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
        containerStyle={{ marginRight: 20 }}
      />
    </SafeAreaView>
  );
};

export default CheckboxExample;
