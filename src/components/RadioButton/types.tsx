export interface RadioButtonProps {
  disabled?: boolean;
  onPress?: (value: string) => void;
  selected?: boolean;
  value: string;
  size: 'xs' | 'sm' | 'md' | 'lg';
}
