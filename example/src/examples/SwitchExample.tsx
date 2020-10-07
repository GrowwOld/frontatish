import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// eslint-disable-next-line import/no-unresolved
import { Switch, useColors, Fonts } from 'frontatish';
// import { Switch as RnSwitch } from 'react-native';

const SwitchExample = () => {
  const Colors = useColors();
  const [isOn, setIsOn] = useState(false);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}
    >
      <Text
        style={{
          color: Colors.font_1,
          fontSize: Fonts.size.h3,
          marginHorizontal: 20,
          marginTop: 10,
        }}
      >
        Table Example
      </Text>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ color: Colors.font_1, marginBottom: 10 }}>
          {isOn ? 'ON' : 'OFF'}
        </Text>
        <Switch
          isOn={isOn}
          onColor={Colors.primary}
          offColor={Colors.font_4}
          size="md"
          onToggle={() => setIsOn(!isOn)}
        />
      </View>
    </SafeAreaView>
  );
};

export default SwitchExample;
