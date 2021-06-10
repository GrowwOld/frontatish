import { View, Text, FlatList } from 'react-native';
import React, { useState } from 'react';
import { MonthYearPickerProps } from './types';
import { changeYear, changeMonth, months, getYearArray } from './helper';
import styles from './styles';
import { useColors } from '../../themes';

const MonthYearPicker = (props: MonthYearPickerProps) => {
  const {
    defaultDate,
    yearsArrayLowerBound,
    yearsArrayUpperBound,
    children,
    setDate,
  } = props;

  const Colors = useColors();

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
    <>
      <View style={styles.monthYearContainer} onLayout={scrollToSelectedYear}>
        <FlatList
          data={yearsArray}
          renderItem={({ item, index }) => (
            <Text
              key={index}
              style={
                activeDate.getFullYear() === item
                  ? [styles.yearSelectedStyle, { color: Colors.font_1 }]
                  : [styles.yearElement, { color: Colors.font_2 }]
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
                style={[
                  styles.monthElement,
                  {
                    color: Colors.font_2,
                    backgroundColor:
                      months[activeDate.getMonth()] === item
                        ? Colors.primary_attr_40
                        : Colors.white,
                  },
                ]}
              >
                {item.substr(0, 3)}
              </Text>
            );
          })}
        </View>
        {children}
      </View>
    </>
  );
};

export default MonthYearPicker;
