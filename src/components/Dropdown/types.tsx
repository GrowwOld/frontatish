import { TextStyle } from 'react-native';

export interface DropItem {
  label: string;
  value: string | number;
}

export interface DropdownProps {
  items: Array<DropItem>;
  active: number;
  itemStyle?: TextStyle;
  activeItemStyle?: TextStyle;
  iconColor?: string;
  onChange: (index: number) => void;
}
export interface DropListProps {
  items: Array<DropItem>;
  active: number;
  itemStyle?: TextStyle;
  onChange: (index: number) => void;
}
