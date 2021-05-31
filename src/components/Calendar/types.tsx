import { ReactNode } from 'react';

export interface CalendarProps {
  type: string;
  setDate: (calendarDate: Date) => void;
  defaultDate: Date;
  title?: string;
  children?: ReactNode;
  yearsArrayLowerBound: number;
  yearsArrayUpperBound: number;
}

export interface MonthYearPickerProps {
  defaultDate: Date;
  yearsArrayLowerBound: number;
  yearsArrayUpperBound: number;
  children?: ReactNode;
  setDate: (calendarDate: Date) => void;
}
