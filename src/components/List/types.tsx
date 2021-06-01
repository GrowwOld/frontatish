import { TextStyle, ViewStyle } from 'react-native';

export interface ListProps {
  leftLabel: string;
  leftSubtext?: string;
  rightLabel?: string;
  rightSubtext?: string;
  leftChipLabel?: string;
  rightChipLabel?: string;
  sparkLine?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  labelStyle?: TextStyle;
  subtextStyle?: TextStyle;
  containerStyle?: ViewStyle;
}
