import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { Input, useColors } from 'viserion';
import { SafeAreaView } from 'react-native-safe-area-context';

const InputExample = () => {
  const Colors = useColors();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <Input
        label="Name (As on PAN Card)"
        placeholder="CGBPR3376M"
        error="Your name is lame. Get a better one."
      />
      <Input label="Name (As on PAN Card)" placeholder="CGBPR3376M" />
      <Input label="Name (As on PAN Card)" value="Disabled Value" disabled />
    </SafeAreaView>
  );
};

export default InputExample;
