import { StyleType } from '../../common/types';

export interface RadioGroupProps {
  onChange: (selectedValue: string) => void;
  defaultValue?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  children?: JSX.Element[];
  containerStyle?: StyleType;
  labelStyle?: StyleType;
  style?: StyleType;
}
