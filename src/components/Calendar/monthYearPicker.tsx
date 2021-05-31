import { View, Text, FlatList } from 'react-native';
import React, { useState } from 'react';
import { MonthYearPickerProps } from './types';
import { changeYear, changeMonth, months } from './helper';
import styles from './styles';

const MonthYearPicker = (props: MonthYearPickerProps) => {
  const {
    defaultDate,
    yearsArrayLowerBound,
    yearsArrayUpperBound,
    children,
    setDate,
  } = props;

  const [activeDate, setActiveDate] = useState(defaultDate);
  const [refFlatList, setRefFlatList] = useState(null);

  setDate(activeDate);

  const yearsArray = [];

  for (
    let year = yearsArrayLowerBound;
    year <= yearsArrayUpperBound;
    year += 1
  ) {
    yearsArray.push(year);
  }

  const getItemLayout = (data: number[] | null | undefined, index: number) => {
    return { length: 70, offset: 70 * (index - 1), index };
  };

  const scrollToSelectedYear = () => {
    refFlatList?.scrollToIndex({
      animated: true,
      index: activeDate.getFullYear() - yearsArrayLowerBound,
    });
  };
  return (
    <View
      style={{
        alignSelf: 'center',
        width: 300,
        paddingHorizontal: 20,
      }}
      onLayout={scrollToSelectedYear}
    >
      <FlatList
        data={yearsArray}
        renderItem={({ item, index }) => (
          <Text
            key={index}
            style={
              activeDate.getFullYear() === item
                ? [styles.yearSelectedStyle]
                : [
                    styles.unselectedStyle,
                    {
                      flex: 1,
                      width: 60,
                      alignSelf: 'center',
                    },
                  ]
            }
            onPress={() => {
              changeYear(item, activeDate, setActiveDate);
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
                changeMonth(index, activeDate, setActiveDate);
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
      {children}
    </View>
  );
};

export default MonthYearPicker;
