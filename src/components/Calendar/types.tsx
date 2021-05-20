import { ReactNode } from 'react';

export interface CalendarProps {
  type: string;
  setDate: (calendarDate: Date) => void;
  defaultDate: Date;
  title?: string;
  children?: ReactNode;
  yearsArrayLowerBound?: number;
  yearsArrayUpperBound?: number;
  isOpen?: boolean;
  onClosed?: () => void;
}
