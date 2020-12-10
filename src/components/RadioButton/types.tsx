import { ReactNode } from 'react';
import { StyleType } from '../../common/types';

export interface RadioButtonProps {
  disabled?: boolean;
  onPress?: (value: string) => void;
  selected?: boolean;
  value?: string;
  valueView?: JSX.Element;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  containerStyle?: StyleType;
  labelStyle?: StyleType;
  customLabel?: ReactNode | undefined | null;
}
