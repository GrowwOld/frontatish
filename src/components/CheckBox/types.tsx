import { ViewStyle } from 'react-native';

export interface CheckBoxProps {
  checkColor?: string;
  checked?: boolean;
  disabled?: boolean;
  containerStyle?: ViewStyle;
  size?: 'sm' | 'md' | 'lg';
}
