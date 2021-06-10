import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

export interface CalendarProps {
  type: 'D/M' | 'D' | 'M/Y';
  OnPressDone: (calendarDate: Date) => void;
  defaultDate?: Date;
  title?: string;
  children?: ReactNode;
  yearsArrayLowerBound?: number;
  yearsArrayUpperBound?: number;
  componentStyle?: ViewStyle;
}

export interface MonthYearPickerProps {
  defaultDate: Date;
  yearsArrayLowerBound: number;
  yearsArrayUpperBound: number;
  children?: ReactNode;
  setDate: (calendarDate: Date) => void;
}
