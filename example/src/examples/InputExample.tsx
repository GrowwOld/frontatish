import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { Input, useColors } from 'supergroww';
import { SafeAreaView } from 'react-native-safe-area-context';

const InputExample = () => {
  const Colors = useColors();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <Input label="Name (As on PAN Card)" placeholder="CGBPR3376M" />
    </SafeAreaView>
  );
};

export default InputExample;
