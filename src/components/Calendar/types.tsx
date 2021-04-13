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
  title: string;
  children: ReactNode;
  isDayRequired: boolean;
  yearsArray: Array<number>;
  isOpen: boolean;
  onClosed: () => void;
  onConfirmClick: (data: picker) => void;
  picker_key: string;
}
