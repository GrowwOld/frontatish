import { View, Text, FlatList } from 'react-native';
import React, { useState } from 'react';
import { MonthYearPickerProps } from './types';
import { changeYear, changeMonth, months, getYearArray } from './helper';
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
  const [refFlatList, setRefFlatList] = useState<FlatList<number>>();

  setDate(activeDate);

  const yearsArray = getYearArray(yearsArrayLowerBound, yearsArrayUpperBound);

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
    <View style={styles.monthYearContainer} onLayout={scrollToSelectedYear}>
      <FlatList
        data={yearsArray}
        renderItem={({ item, index }) => (
          <Text
            key={index}
            style={
              activeDate.getFullYear() === item
                ? [styles.yearSelectedStyle]
                : [styles.unselectedStyle, styles.yearElement]
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
        style={styles.marginHorizontal30}
        ref={(ref) => setRefFlatList(ref)}
      />
      <View style={styles.monthView}>
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
