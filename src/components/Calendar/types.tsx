import { ReactNode } from 'react';

export interface monthYear {
  month: number;
  year: number;
}
export interface picker {
  key: string;
  value: monthYear;
}
export interface CalendarProps {
  setDate: (calendarDate: Date) => void;
  title: string;
  children?: ReactNode;
  type: string;
  yearsArray?: Array<number>;
  isOpen?: boolean;
  onClosed: () => void;
  onConfirmClick: (data: picker) => void;
  pickerKey: string;
}
