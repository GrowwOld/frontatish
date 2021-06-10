import React, { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { Calendar, useColors, Dropdown } from 'frontatish';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';

const CalendarExample = () => {
  const Colors = useColors();
  const [date, setDate] = useState(new Date());
  const [active, setActive] = useState(0);
  const setSelectedDate = (calendarDate: Date) => {
    setDate(calendarDate);
  };
  const items = [
    { value: 'D/M', label: 'Day-Month' },
    { value: 'D', label: 'Day' },
    { value: 'M/Y', label: 'Month-Year' },
  ];
  const onChange = (index: number) => {
    setActive(index);
  };
  const getCalendar = () => {
    switch (active) {
      case 0:
        return (
          <Calendar
            title="Select Date:"
            defaultDate={new Date()}
            OnPressDone={setSelectedDate}
            type="D/M"
          />
        );
      case 1:
        return (
          <Calendar
            title="Select Date:"
            defaultDate={new Date()}
            OnPressDone={setSelectedDate}
            type="D"
          />
        );
      case 2:
        return (
          <Calendar
            title="Select Month & Year"
            defaultDate={new Date()}
            type="M/Y"
            OnPressDone={setSelectedDate}
          />
        );
      default:
        return null;
    }
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.white,
      }}
    >
      <Dropdown items={items} active={active} onChange={onChange} />
      <View style={{ margin: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 16,
          }}
        >
          <Text
            style={{
              color: Colors.font_1,
              fontWeight: '500',
              paddingRight: 6,
            }}
          >
            Selected date:
          </Text>
          <Text
            style={{
              color: Colors.font_1,
              marginBottom: 16,
              textAlign: 'center',
              fontSize: 14,
            }}
          >
            {date.toDateString()}
          </Text>
        </View>
        <View style={{ borderWidth: 1, borderColor: Colors.font_1 }}>
          {getCalendar()}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CalendarExample;
