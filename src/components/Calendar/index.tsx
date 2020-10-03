import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import IonIcon from 'react-native-vector-icons/Ionicons';
import Ripple from 'react-native-material-ripple';
import Button from '../Button';
import { useColors } from '../../themes';
import { CalendarProps } from './types';

const styles = StyleSheet.create({
  calendarContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const Calendar = (props: CalendarProps) => {
  const [activeDate, setActiveDate] = useState(new Date());
  const Colors = useColors();
  const { setDate, title } = props;
  const changeMonth = (delta: number) => {
    const newTimeInMS = activeDate.setMonth(activeDate.getMonth() + delta);
    const updatedDate = new Date(newTimeInMS);
    setActiveDate(updatedDate);
  };
  const changeDay = (dateOfMonth: number) => {
    const newTimeInMS = activeDate.setMonth(activeDate.getMonth(), dateOfMonth);
    const updatedDate = new Date(newTimeInMS);
    setActiveDate(updatedDate);
  };
  setDate(activeDate);

  const generateMatrix = () => {
    const matrix = [];
    // Create header
    matrix[0] = ['1', '2', '3', '4', '5', '6', '7'];
    const year = activeDate.getFullYear();
    const month = activeDate.getMonth();

    // const firstDay = new Date(year, month, 1).getDay();
    let maxDays = nDays[month];
    if (month === 1) {
      // February
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        maxDays += 1;
      }
    }
    let counter = 8;
    for (let row = 1; row < 5; row += 1) {
      matrix[row] = [];
      for (let col = 0; col < 7; col += 1) {
        if (counter <= maxDays) {
          matrix[row][col] = counter.toString();
          counter += 1;
        } else {
          matrix[row][col] = '';
        }
      }
    }
    return matrix;
  };
  const matrix = generateMatrix();
  const renderEachRow = (daysArray: number[]) => {
    // console.log('dataArray', daysArray);
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
              onPress={() => changeDay(item)}
              rippleContainerBorderRadius={18}
            >
              <View
                style={{
                  justifyContent: 'center',
                  borderRadius: 18,
                  height: 36,
                  width: 36,
                  backgroundColor:
                    activeDate.getDate().toString() === item
                      ? '#E5FAF5'
                      : 'white',
                }}
              >
                <Text
                  style={{
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

  return (
    <View style={[styles.calendarContainer, { backgroundColor: Colors.white }]}>
      <View style={{ marginVertical: 24 }}>
        <Text
          style={{
            textAlign: 'center',
            color: Colors.font_1,
            fontWeight: 'bold',
          }}
        >
          {title}
        </Text>
      </View>
      <View
        style={{
          height: 40,
          backgroundColor: Colors.font_6,

          // justifyContent: 'center',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 30,
            alignItems: 'center',
          }}
        >
          <Ripple
            style={{
              height: 32,
              width: 32,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            rippleContainerBorderRadius={16}
            onPress={() => changeMonth(-1)}
          >
            <IonIcon
              name="ios-arrow-back"
              size={16}
              color={Colors.primary}
              // style={{ flex: 1, textAlign: 'center' }}
            />
          </Ripple>
          <Text
            style={{
              color: Colors.primary,
              flex: 2,
              textAlign: 'center',
              fontWeight: '500',
              fontSize: 16,
            }}
          >
            {months[activeDate.getMonth()]}
          </Text>
          <Ripple
            style={{
              height: 32,
              width: 32,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            rippleContainerBorderRadius={16}
            onPress={() => changeMonth(1)}
          >
            <IonIcon
              name="ios-arrow-forward"
              size={16}
              color={Colors.primary}
              // style={{ flex: 1, textAlign: 'center' }}
            />
          </Ripple>
        </View>
      </View>
      <View style={{ alignItems: 'center', marginTop: 16 }}>
        {matrix.map((item) => renderEachRow(item))}
      </View>
      <View style={{ margin: 20 }}>
        <Button label="CONFIRM DATE" />
      </View>
    </View>
  );
};

Calendar.defaultProps = {
  title: 'Select Date:',
};

export default Calendar;
