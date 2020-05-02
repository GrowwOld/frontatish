import { StyleType } from '../../common/types';

export interface TableProps {
  customItemComponents: any;
  data: Array<any>;
  flatlistKey: string;
  isDark: boolean;
  leftKey: string;
  leftKeyOnPress?: () => void;
  option: Array<string> | string;
  optionLabel: Array<string> | string;
  rightKey: string;
  rightKeyOnPress?: () => void;
  title: string;
}

export interface TableItemProps {
  item: StyleType;
  index: number;
}
