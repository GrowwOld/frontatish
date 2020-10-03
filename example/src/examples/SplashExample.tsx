import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

// eslint-disable-next-line import/no-unresolved
import { Splash, useColors } from 'frontatish';

const SplashExample = () => {
  const Colors = useColors();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <Splash />
    </SafeAreaView>
  );
};

export default SplashExample;
