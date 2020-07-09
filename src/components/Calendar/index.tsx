import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'supergroww';
// eslint-disable-next-line import/no-unresolved
import IonIcon from 'react-native-vector-icons/Ionicons';
import Ripple from 'react-native-material-ripple';

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
    backgroundColor: '#fff',
    elevation: 3,
  },
  datePickerContainer: {
    height: 147,
    width: 247,
    // marginTop: 20,
    // marginBottom: 40,
    backgroundColor: '#CCF6EB',
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

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const Calendar = () => {
  const [activeDate, setActiveDate] = useState(new Date());
  console.log('active data is', activeDate);
  const changeMonth = (delta) => {
    const newTimeInMS = activeDate.setMonth(activeDate.getMonth() + delta);
    const updatedDate = new Date(newTimeInMS);
    setActiveDate(updatedDate);
    // set(() => {
    //   this.state.activeDate.setMonth(
    //     this.state.activeDate.getMonth() + n
    //   )
    //   return this.state;
    // });
  };
  const generateMatrix = () => {
    const matrix = [];
    // Create header
    matrix[0] = weekDays;

    // More code here

    const year = activeDate.getFullYear();
    const month = activeDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    let maxDays = nDays[month];
    if (month === 1) {
      // February
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        maxDays += 1;
      }
    }
    let counter = 1;
    for (let row = 1; row < 7; row++) {
      matrix[row] = [];
      for (let col = 0; col < 7; col++) {
        matrix[row][col] = -1;
        if (row === 1 && col >= firstDay) {
          // Fill in rows only after the first day of the month
          matrix[row][col] = counter;
          counter += 1;
        } else if (row > 1 && counter <= maxDays) {
          // Fill in rows only if the counter's not greater than
          // the number of days in the month
          matrix[row][col] = counter;
          counter += 1;
        }
      }
    }
    return matrix;
  };
  const matrix = generateMatrix();
  let rows = [];
  rows = matrix.map((row, rowIndex) => {
    const rowItems = row.map((item, colIndex) => {
      return (
        <Text
          style={{
            flex: 1,
            height: 18,
            textAlign: 'center',
            // Highlight header
            backgroundColor: rowIndex === 0 ? '#ddd' : '#fff',
            // Highlight Sundays
            color: colIndex === 0 ? '#a00' : '#000',
            // Highlight current date
            fontWeight: item === activeDate.getDate() ? 'bold' : '',
          }}
          // onPress={() => this._onPress(item)}
        >
          {item !== -1 ? item : ''}
        </Text>
      );
    });
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          padding: 15,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        {rowItems}
      </View>
    );
  });
  return (
    <View style={styles.calendarContainer}>
      <View style={{ marginVertical: 24 }}>
        <Text style={{ textAlign: 'center' }}>Selecting Date</Text>
      </View>
      <View style={{ alignItems: 'center', backgroundColor: '#F9FAFA' }}>
        <View
          style={{
            height: 40,

            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Ripple
            style={{ height: 32, width: 32, borderRadius: 16 }}
            onPress={() => changeMonth(-1)}
          >
            <IonIcon
              name="ios-arrow-back"
              size={16}
              color="#00D09C"
              // style={{ flex: 1, textAlign: 'center' }}
            />
          </Ripple>
          <Text style={{ marginHorizontal: 90 }}>
            {months[activeDate.getMonth()]}
          </Text>
          <Ripple
            style={{ height: 32, width: 32, borderRadius: 16 }}
            onPress={() => changeMonth(1)}
          >
            <IonIcon
              name="ios-arrow-forward"
              size={16}
              color="#00D09C"
              // style={{ flex: 1, textAlign: 'center' }}
            />
          </Ripple>
        </View>
      </View>
      <View style={{ alignItems: 'center' }}>{rows}</View>
      <View style={{ margin: 20 }}>
        <Button label="CONFIRM DATE" isDark={false} />
      </View>
    </View>
  );
};

export default Calendar;
