import React, { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { Button, Calendar, useColors, Dropdown } from 'frontatish';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';

const CalendarExample = () => {
  const Colors = useColors();
  const [date, setDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(0);
  const setSelectedDate = (calendarDate: Date) => {
    setDate(calendarDate);
  };
  const items = [
    { value: 'D/M/Y', label: 'Day-Month-Year' },
    { value: 'D', label: 'Day' },
    { value: 'M/Y', label: 'Month-Year' },
  ];
  const onChange = (index: number) => {
    setActive(index);
  };
  const giveSelectedDate = () => {
    switch (active) {
      case 0: {
        return date?.toString();
      }
      case 1: {
        return date.getDate();
      }
      case 2: {
        return `Month: ${date.getMonth() + 1} Year: ${date.getFullYear()}`;
      }
      default:
        return null;
    }
  };
  const getCalendar = () => {
    switch (active) {
      case 0:
        return (
          <Calendar
            title="Select Date:"
            defaultDate={date}
            setDate={setSelectedDate}
            type="D/M/Y"
          />
        );
      case 1:
        return (
          <Calendar
            title="Select Date:"
            defaultDate={date}
            setDate={setSelectedDate}
            type="D"
            onClosed={() => setIsOpen(false)}
            isOpen={isOpen}
          />
        );
      case 2:
        return (
          <Calendar
            title="Select Month & Year"
            defaultDate={date}
            type="M/Y"
            setDate={setSelectedDate}
            onClosed={() => setIsOpen(false)}
            isOpen={isOpen}
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
            {giveSelectedDate()}
          </Text>
        </View>
        {getCalendar()}

        <View style={{ margin: 20 }}>
          <Button
            label={active === 0 ? 'Done' : 'Open Calendar'}
            onPress={() => setIsOpen(true)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CalendarExample;
