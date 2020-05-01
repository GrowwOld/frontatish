export interface RadioButtonProps {
  disabled?: boolean;
  isDark: boolean;
  onPress?: (value: string) => void;
  selected?: boolean;
  value: string;
}
