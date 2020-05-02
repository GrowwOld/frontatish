import { ViewStyle } from 'react-native';

export interface CheckBoxProps {
  checkColor?: string;
  checked?: boolean;
  disabled?: boolean;
  isDark: boolean;
  onPress?: () => void;
  containerStyle?: ViewStyle;
}
