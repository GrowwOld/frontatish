import { ReactNode } from 'react';

export interface CalendarProps {
  setDate: (calendarDate: Date) => void;
  title: string;
  children: ReactNode;
  isDayRequired: boolean;
  yearsArray: Array<number>;
  isOpen: boolean;
  onClosed: () => void;
  onConfirmClick: () => void;
  picker_key: JSX.Element;
}
