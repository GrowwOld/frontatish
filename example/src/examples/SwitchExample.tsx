import React, { useState } from 'react';

// eslint-disable-next-line import/no-unresolved
import { Switch } from 'supergroww';
// import { Switch as RnSwitch } from 'react-native';

const SwitchExample = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <>
      <Switch
        isOn={isOn}
        onColor="#00D09C"
        offColor="#E6E7E8"
        // label="Example label"
        // size="small"
        onToggle={() => setIsOn(!isOn)}
      />
      {/* <RnSwitch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isOn ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => setIsOn(!isOn)}
        value={isOn}
      /> */}
    </>
  );
};

export default SwitchExample;
