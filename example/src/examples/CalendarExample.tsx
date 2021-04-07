import React, { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { Button, Calendar, useColors } from 'frontatish';
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
          <Text style={{ color: Colors.font_1, fontWeight: '500' }}>
            Selected date:
          </Text>
          <Text
            style={{
              color: Colors.font_1,
              marginTop: 10,
              marginBottom: 16,
              textAlign: 'center',
              fontSize: 12,
            }}
          >
            {date?.toString()}
          </Text>
        </View>
        <Calendar setDate={setSelectedDate} title="Select Date" />
        <View style={{ margin: 20 }}>
          <Button label="CONFIRM DATE" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CalendarExample;
