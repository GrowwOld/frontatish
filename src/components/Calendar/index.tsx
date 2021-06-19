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
import { changeDay, changeMonth, generateDayMatrix, months } from './helper';

const Calendar = (props: CalendarProps) => {
  const {
    defaultDate,
    title,
    children,
    type,
    yearsArrayLowerBound,
    yearsArrayUpperBound,
    OnPressDone,
    componentStyle,
  } = props;

  const [activeDate, setActiveDate] = useState(defaultDate ?? new Date());

  // getting the suitable color based on the theme
  // activated inside the app
  const Colors = useColors();

  const dayMatrix = generateDayMatrix(activeDate);

  const renderEachDayRow = (daysArray: string[]) => {
    return (
      <View style={styles.dateView}>
        {daysArray.map((item) => {
          return item === '' ? null : (
            <View
              style={[
                styles.dateElement,
                {
                  backgroundColor:
                    activeDate.getDate().toString() === item
                      ? Colors.primary_attr_40
                      : Colors.white,
                },
              ]}
            >
              <Text
                style={[styles.textAlignCenter, { color: Colors.font_2 }]}
                onPress={() =>
                  changeDay(parseInt(item, 10), activeDate, setActiveDate)
                }
              >
                {item}
              </Text>
            </View>
          );
        })}
      </View>
    );
  };

  const getChangeMonthIcon = (iconName: string, delta: number) => {
    return (
      <Ripple
        style={styles.arrowIcon}
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
      <View style={styles.alignItemsCenter}>
        <View style={styles.alignItemsStart}>
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
              style={[styles.dayMonthView, { backgroundColor: Colors.font_6 }]}
            >
              {getChangeMonthIcon('ios-arrow-back', -1)}
              <Text
                style={[styles.activeMonthTitle, { color: Colors.primary }]}
              >
                {months[activeDate.getMonth()]}
              </Text>
              {getChangeMonthIcon('ios-arrow-forward', 1)}
            </View>
            {getDayView()}
            {children}
          </>
        );

      case 'M/Y':
        return (
          <MonthYearPicker
            defaultDate={activeDate}
            yearsArrayLowerBound={yearsArrayLowerBound ?? 2016}
            yearsArrayUpperBound={
              yearsArrayUpperBound ?? new Date().getFullYear()
            }
            setDate={setActiveDate}
          />
        );
      case 'D':
        return getDayView();
      default:
        return <></>;
    }
  };
  return (
    <View
      style={[
        styles.calendarContainer,
        componentStyle,
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
      {calendarContent()}
      <Button label="Done" onPress={() => OnPressDone(activeDate)} />
    </View>
  );
};

Calendar.defaultProps = {
  title: 'Select Date:',
  type: 'D/M',
};

export default Calendar;
