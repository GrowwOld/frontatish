import { StyleType } from '../../common/types';

export interface TableProps {
  isDark: boolean;
  title: string;
  option: Array<string> | string;
  data: Array<any>;
  leftKey: string;
  rightKey: string;
  flatlistKey: string;
}

export interface TableItemProps {
  item: StyleType;
  index: number;
}
