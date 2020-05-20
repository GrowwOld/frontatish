import React, { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { Checkbox } from 'supergroww';

const CheckboxExample = () => {
  const [tick, setTick] = useState(false);
  return (
    <Checkbox
      isDark={false}
      checked={tick}
      onPress={() => setTick(!tick)}
      containerStyle={{ marginRight: 20 }}
    />
  );
};

export default CheckboxExample;
