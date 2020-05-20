import React, { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { CheckBox } from 'supergroww';

const CheckboxExample = () => {
  const [tick, setTick] = useState(false);
  return (
    <CheckBox
      checked={tick}
      onPress={() => setTick(!tick)}
      containerStyle={{ marginRight: 20 }}
    />
  );
};

export default CheckboxExample;
