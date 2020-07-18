import { ViewStyle } from 'react-native';

export interface CheckBoxProps {
  checkColor?: string;
  checked?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  containerStyle?: ViewStyle;
}
