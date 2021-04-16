import React, { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { Button, Calendar, useColors, Switch } from 'frontatish';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';

const CalendarExample = () => {
  const Colors = useColors();
  const [date, setDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(true);
  const [toDate, setToDate] = useState({
    year: date.getFullYear(),
    month: date.getMonth(),
  });
  const [isDayRequired, setIsDayRequired] = useState(false);
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
        <View style={{ alignItems: 'center' }}>
          <Switch
            isOn={isDayRequired}
            onColor="#00D09C"
            offColor="#E6E7E8"
            onToggle={() => {
              setIsDayRequired(!isDayRequired);
              setIsOpen(true);
            }}
          />
        </View>
        <Text style={{ textAlign: 'center' }}>Full Calendar</Text>

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
            {isDayRequired
              ? date?.toString()
              : 'Month: ' +
                (toDate.month + 1).toString() +
                ', ' +
                'Year: ' +
                toDate.year.toString()}
          </Text>
        </View>
        <Calendar
          setDate={setSelectedDate}
          isDayRequired={isDayRequired}
          onClosed={() => setIsOpen(false)}
          onConfirmClick={(data) => {
            setToDate({ ...data.value });
            setIsOpen(false);
          }}
          isOpen={isOpen}
          picker_key="to_date"
        />
        <View style={{ margin: 20 }}>
          <Button label="CONFIRM DATE" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CalendarExample;
