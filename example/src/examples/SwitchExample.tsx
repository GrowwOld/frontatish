import React, { useState } from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
// eslint-disable-next-line import/no-unresolved
import { Switch } from 'viserion';
// import { Switch as RnSwitch } from 'react-native';

const SwitchExample = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
    </SafeAreaView>
  );
};

export default SwitchExample;
