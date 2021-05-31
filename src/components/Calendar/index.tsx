import React, { useState } from 'react';
import { View, Text } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import IonIcon from 'react-native-vector-icons/Ionicons';
import Ripple from 'react-native-material-ripple';
// eslint-disable-next-line import/no-unresolved
import { Button } from 'frontatish';
import { useColors } from '../../themes';
import { CalendarProps } from './types';
import MonthYearPicker from './monthYearPicker';
import styles from './styles';
import { changeDay, changeMonth, months } from './helper';

const nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const Calendar = (props: CalendarProps) => {
  const {
    defaultDate,
    title,
    children,
    type,
    yearsArrayLowerBound,
    yearsArrayUpperBound,
    setDate,
  } = props;

  const [activeDate, setActiveDate] = useState(defaultDate);

  // getting the suitable color based on the theme
  // activated inside the app
  const Colors = useColors();

  setDate(activeDate);

  const generateDayMatrix = () => {
    const dayMatrix = [];
    // Create header
    dayMatrix[0] = ['1', '2', '3', '4', '5', '6', '7'];
    const year = activeDate.getFullYear();
    const month = activeDate.getMonth();

    let maxDays = nDays[month];
    if (month === 1) {
      // February
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        maxDays += 1;
      }
    }
    let counter = 8;
    for (let row = 1; row < 5; row += 1) {
      dayMatrix[row] = [];
      for (let col = 0; col < 7; col += 1) {
        if (counter <= maxDays) {
          dayMatrix[row][col] = counter.toString();
          counter += 1;
        } else {
          dayMatrix[row][col] = '';
        }
      }
    }
    return dayMatrix;
  };
  const dayMatrix = generateDayMatrix();
  const renderEachDayRow = (daysArray: string[]) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        {daysArray.map((item) => {
          return item === '' ? null : (
            <Ripple
              onPress={() =>
                changeDay(parseInt(item, 10), activeDate, setActiveDate)
              }
              rippleContainerBorderRadius={18}
            >
              <View
                style={{
                  justifyContent: 'center',
                  borderRadius: 18,
                  margin: 3,
                  height: 36,
                  width: 36,
                  backgroundColor:
                    activeDate.getDate().toString() === item
                      ? Colors.primary_attr_90
                      : Colors.white,
                }}
              >
                <Text
                  style={{
                    color: Colors.font_2,
                    textAlign: 'center',
                  }}
                >
                  {item}
                </Text>
              </View>
            </Ripple>
          );
        })}
      </View>
    );
  };

  const getChangeMonthIcon = (iconName: string, delta: number) => {
    return (
      <Ripple
        style={{
          height: 32,
          width: 32,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        rippleContainerBorderRadius={16}
        onPress={() =>
          changeMonth(activeDate.getMonth() + delta, activeDate, setActiveDate)
        }
      >
        <IonIcon name={iconName} size={16} color={Colors.primary} />
      </Ripple>
    );
  };

  const getDayView = () => {
    return (
      <View style={{ alignItems: 'center' }}>
        <View style={{ alignItems: 'flex-start' }}>
          {dayMatrix.map((item) => renderEachDayRow(item))}
        </View>
      </View>
    );
  };

  const calendarContent = () => {
    switch (type) {
      case 'D/M':
        return (
          <>
            <View
              style={{
                height: 40,
                backgroundColor: Colors.font_6,
                flexDirection: 'row',
                paddingHorizontal: 30,
                alignItems: 'center',
                marginBottom: 16,
              }}
            >
              {getChangeMonthIcon('ios-arrow-back', -1)}
              <Text
                style={{
                  color: Colors.primary,
                  flex: 2,
                  textAlign: 'center',
                  fontSize: 16,
                }}
              >
                {months[activeDate.getMonth()]}
              </Text>
              {getChangeMonthIcon('ios-arrow-forward', 1)}
            </View>
            {getDayView()}
            {children}
            <Button label="Done" onPress={() => setDate(activeDate)} />
          </>
        );

      case 'M/Y':
        return (
          <MonthYearPicker
            defaultDate={defaultDate}
            yearsArrayLowerBound={yearsArrayLowerBound}
            yearsArrayUpperBound={yearsArrayUpperBound}
            setDate={setActiveDate}
          />
        );
      case 'D':
        return (
          <>
            {getDayView()}

            <Button label="Done" onPress={() => setDate(activeDate)} />
          </>
        );
      default:
        return (
          <>
            <Text>Day Picker</Text>
          </>
        );
    }
  };
  return (
    <View
      style={[
        styles.calendarContainer,
        { backgroundColor: Colors.white, shadowColor: Colors.font_1 },
      ]}
    >
      <Text
        style={[
          styles.TextStyle,
          { color: Colors.font_1 },
          styles.marginVertical20,
        ]}
      >
        {title}
      </Text>
      <View>{calendarContent()}</View>
    </View>
  );
};

Calendar.defaultProps = {
  defaultDate: new Date(),
  title: 'Select Date:',
  type: 'D/M/Y',
  yearsArrayLowerBound: 2016,
  yearsArrayUpperBound: new Date().getFullYear(),
  pickerKey: {},
};

export default Calendar;
