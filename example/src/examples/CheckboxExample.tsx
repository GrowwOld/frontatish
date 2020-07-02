import React, { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { Checkbox } from 'supergroww';
import { SafeAreaView } from 'react-native-safe-area-context';

const CheckboxExample = () => {
  const [tick, setTick] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Checkbox
        isDark={false}
        checked={tick}
        onPress={() => setTick(!tick)}
        containerStyle={{ marginRight: 20 }}
      />
    </SafeAreaView>
  );
};

export default CheckboxExample;
