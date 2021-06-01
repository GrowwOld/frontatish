import { TextStyle, ViewStyle } from 'react-native';

export interface ChipProps {
  label: string;
  isSelected?: boolean;
  onPress?: () => void;
  disabled?: boolean;
  iconName?: string;
  iconStyle?: ViewStyle;
  onClose?: () => void;
  labelStyle?: TextStyle;
  containerStyle?: ViewStyle;
  selectedContainerStyle?: ViewStyle;
}
