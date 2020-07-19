import React, { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { Calendar, useColors } from 'supergroww';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';

const CalendarExample = () => {
  const Colors = useColors();
  const [date, setDate] = useState(new Date());
  const setSelectedDate = (calendarDate: Date) => {
    setDate(calendarDate);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.white,
      }}
    >
      <Text>{date?.toString()}</Text>
      <View style={{ margin: 20 }}>
        <Calendar setDate={setSelectedDate} />
      </View>
    </SafeAreaView>
  );
};

export default CalendarExample;
