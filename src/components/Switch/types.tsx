import { ReactNode } from 'react';
import { StyleType } from '../../common/types';

export interface SwitchProps {
  isOn: boolean;
  onColor: string;
  offColor: string;
  onToggle: () => void;
  size?: string;
  icon?: ReactNode;
  disabled?: boolean;
  trackOffStyle: StyleType;
  trackOnStyle: StyleType;
  thumbOnStyle: StyleType;
  thumbOffStyle: StyleType;
}
