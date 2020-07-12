import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { Calendar, useColors } from 'supergroww';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';

const CalendarExample = () => {
  const Colors = useColors();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.white,
      }}
    >
      <View style={{ margin: 20 }}>
        <Calendar />
      </View>
    </SafeAreaView>
  );
};

export default CalendarExample;
