import React, { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { EmptyView, useColors } from 'viserion';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';

const EmptyViewExample = () => {
  const Colors = useColors();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.white,
        padding: 20,
      }}
    >
      <EmptyView
        title="Something went wrong"
        subTitle="Our data fetching minions ran into an error"
        actionTitle="TRY AGAIN"
        actionPress={() => {}}
        type="error"
      />
    </SafeAreaView>
  );
};

export default EmptyViewExample;
