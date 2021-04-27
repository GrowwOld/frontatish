import React, { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { Button, Calendar, useColors, Dropdown } from 'frontatish';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';

const CalendarExample = () => {
  const Colors = useColors();
  const [date, setDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [toDate, setToDate] = useState({
    year: date.getFullYear(),
    month: date.getMonth(),
  });
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
            {active === 0
              ? date?.toString()
              : `Month: ${(toDate.month + 1).toString()}, ` +
                `Year: ${toDate.year.toString()}`}
          </Text>
        </View>
        <Calendar
          setDate={setSelectedDate}
          type={items[active].value}
          onClosed={() => setIsOpen(false)}
          onConfirmClick={(data) => {
            setToDate({ ...data.value });
            setIsOpen(false);
          }}
          isOpen={isOpen}
          pickerKey="to_date"
        />
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
