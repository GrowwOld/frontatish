import { ViewStyle } from 'react-native';

export interface CheckBoxProps {
  checkColor?: string;
  checked?: boolean;
  disabled?: boolean;
  // press method will always be optional,keeping in mind
  // to give better clicking space on taps,we might deprecate
  // this in future.
  onPress?: () => void;
  containerStyle?: ViewStyle;
  size?: 'sm' | 'md' | 'lg';
}
