import { ReactNode } from 'react';

export interface CalendarProps {
  setDate: (calendarDate: Date) => void;
  title: String;
  children: ReactNode;
}
