import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import IonIcon from 'react-native-vector-icons/Ionicons';
import Ripple from 'react-native-material-ripple';
// eslint-disable-next-line import/no-unresolved
import { Button } from 'frontatish';
import { useColors } from '../../themes';
import { CalendarProps } from './types';
import { Fonts } from '../../styles';

const styles = StyleSheet.create({
  calendarContainer: {
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    padding: 8,
  },
  TextStyle: {
    fontSize: 18,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 24,
    letterSpacing: -0.17,
    textAlign: 'center',
    marginTop: 20,
  },
  yearSelectedStyle: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    fontSize: 21,
    fontWeight: '400',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    paddingVertical: 10,
    // marginBottom: 4,
    marginRight: 10,
    color: '#44475B',
  },
  unselectedStyle: {
    height: 40,
    width: 40,
    fontFamily: Fonts.type.gotham_medium,
    fontSize: 13,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 10,
    marginBottom: 4,
    marginRight: 10,
    borderRadius: 25,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  selectedStyle: {
    height: 40,
    width: 40,
    borderRadius: 25,
    borderStyle: 'solid',
    backgroundColor: '#00D09C',
    borderWidth: 1,
    borderColor: '#dfe1e4',
    fontFamily: Fonts.type.gotham_medium,
    fontSize: 13,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#FFFFFF',
    paddingVertical: 10,
    marginBottom: 4,
    marginRight: 10,
    overflow: 'hidden',
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
  const [refFlatList, setRefFlatList] = useState(null);

  // getting the suitable color based on the theme
  // activated inside the app
  const Colors = useColors();

  const changeYear = (newYear: number) => {
    const newTimeInMS = activeDate.setFullYear(newYear);
    const updatedDate = new Date(newTimeInMS);
    setActiveDate(updatedDate);
  };
  const changeMonth = (newMonth: number) => {
    const newTimeInMS = activeDate.setMonth(newMonth);
    const updatedDate = new Date(newTimeInMS);
    setActiveDate(updatedDate);
  };
  const changeDay = (dateOfMonth: number) => {
    const newTimeInMS = activeDate.setMonth(activeDate.getMonth(), dateOfMonth);
    const updatedDate = new Date(newTimeInMS);
    setActiveDate(updatedDate);
  };
  setDate(activeDate);

  const yearsArray = [];
  if (type === 'M/Y') {
    for (
      let year = yearsArrayLowerBound;
      year <= yearsArrayUpperBound;
      year += 1
    ) {
      yearsArray.push(year);
    }
  }

  const generateMatrix = () => {
    const matrix = [];
    // Create header
    matrix[0] = ['1', '2', '3', '4', '5', '6', '7'];
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
  const renderEachRow = (daysArray: string[]) => {
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
              onPress={() => changeDay(parseInt(item, 10))}
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

  const getItemLayout = (data: number[] | null | undefined, index: number) => {
    return { length: 70, offset: 70 * (index - 1), index };
  };

  const scrollToSelectedYear = () => {
    refFlatList?.scrollToIndex({
      animated: true,
      index: activeDate.getFullYear() - yearsArrayLowerBound,
    });
  };

  const getChangeMonthIcon = (iconName: string) => {
    return (
      <Ripple
        style={{
          height: 32,
          width: 32,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        rippleContainerBorderRadius={16}
        onPress={() => changeMonth(activeDate.getMonth() - 1)}
      >
        <IonIcon name={iconName} size={16} color={Colors.primary} />
      </Ripple>
    );
  };

  const calendarContent = () => {
    switch (type) {
      case 'D/M/Y':
        return (
          <>
            <View
              style={{
                height: 40,
                backgroundColor: Colors.font_6,
                flexDirection: 'row',
                paddingHorizontal: 30,
                alignItems: 'center',
              }}
            >
              {getChangeMonthIcon('ios-arrow-back')}
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
              {getChangeMonthIcon('ios-arrow-forward')}
            </View>
            <View style={{ alignItems: 'center' }}>
              <View style={{ alignItems: 'flex-start', marginTop: 16 }}>
                {matrix.map((item) => renderEachRow(item))}
              </View>
            </View>
            {children}
            <Button label="Done" onPress={() => setDate(activeDate)} />
          </>
        );

      case 'M/Y':
        return (
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
            }}
            onLayout={scrollToSelectedYear}
          >
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                paddingHorizontal: 20,
              }}
            >
              <Text style={styles.TextStyle}>{title}</Text>
              <FlatList
                data={yearsArray}
                renderItem={({ item, index }) => (
                  <Text
                    key={index}
                    style={
                      activeDate.getFullYear() === item
                        ? [
                            styles.yearSelectedStyle,
                            { marginBottom: 0, flex: 1 },
                          ]
                        : [
                            styles.unselectedStyle,
                            {
                              marginBottom: 0,
                              flex: 1,
                              width: 60,
                              alignSelf: 'center',
                            },
                          ]
                    }
                    onPress={() => {
                      changeYear(item);
                      scrollToSelectedYear();
                    }}
                  >
                    {item}
                  </Text>
                )}
                getItemLayout={getItemLayout}
                keyExtractor={(item) => item.toString()}
                horizontal
                style={{
                  marginHorizontal: 30,
                }}
                ref={(ref) => setRefFlatList(ref)}
              />
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  paddingHorizontal: 25,
                }}
              >
                {months.map((item, index) => {
                  return (
                    <Text
                      onPress={() => {
                        changeMonth(index);
                      }}
                      style={
                        months[activeDate.getMonth()] === item
                          ? [styles.selectedStyle]
                          : [styles.unselectedStyle]
                      }
                    >
                      {item.substr(0, 3)}
                    </Text>
                  );
                })}
              </View>
              <Button
                label="Done"
                customStyles={{ margin: 12 }}
                onPress={() => {}}
              />
            </View>
          </View>
        );
      case 'D':
        return (
          <View
            style={{
              backgroundColor: 'white',
              paddingHorizontal: 20,
              paddingVertical: 5,
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                fontWeight: '800',
                marginBottom: 5,
              }}
            >
              {title}
            </Text>
            <View
              style={{
                alignItems: 'center',
                marginBottom: 10,
              }}
            >
              <View style={{ alignItems: 'flex-start', marginTop: 16 }}>
                {matrix.map((item) => renderEachRow(item))}
              </View>
            </View>

            <Button
              label="Confirm"
              onPress={() => setDate(activeDate)}
              customStyles={{ margin: 10 }}
            />
          </View>
        );
      default:
        return (
          <View>
            <Text>Day Picker</Text>
          </View>
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
        style={[styles.TextStyle, { color: Colors.font_1, marginVertical: 10 }]}
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
