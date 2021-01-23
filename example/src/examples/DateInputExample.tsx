// example usage of button component
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

// eslint-disable-next-line import/no-unresolved
import { DateInput, useColors } from 'frontatish';
import { SafeAreaView } from 'react-native-safe-area-context';

const DateInputExample = () => {
  const Colors = useColors();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <DateInput placeholder="DD/MM/YYY" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  exampleBtnContainer: {
    flex: 1,
    // justifyContent: 'space-evenly',
    margin: 20,
  },
  exampleBtnText: {},
});

export default DateInputExample;
