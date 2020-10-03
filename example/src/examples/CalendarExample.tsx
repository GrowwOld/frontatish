import React, { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { Calendar, useColors } from 'viserion';
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
      <View style={{ margin: 20 }}>
        <View>
          <Text style={{ fontWeight: '500' }}>Selected date:</Text>
        </View>
        <Text style={{ marginVertical: 20, textAlign: 'center', fontSize: 12 }}>
          {date?.toString()}
        </Text>
        <Calendar setDate={setSelectedDate} title="Select Date" />
      </View>
    </SafeAreaView>
  );
};

export default CalendarExample;
