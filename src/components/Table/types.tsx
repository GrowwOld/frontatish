import { StyleType } from '../../common/types';

export interface TableProps {
  customLeftItemComponents?: any;
  customRightItemComponents?: any;
  data: Array<any>;
  flatlistKey: string;
  leftKey: string;
  leftKeyOnPress?: (item: any) => void;
  leftItemContainerStyle?: StyleType;
  leftItemTextStyle?: StyleType;
  rightItemContainerStyle?: StyleType;
  rightItemTextStyle?: StyleType;
  option: Array<string> | string;
  optionLabel: Array<string> | string;
  optionTextStyle?: StyleType;
  rightKeyOnPress?: (label?: any, item?: any) => void;
  title: string;
  titleTextStyle?: StyleType;
  topContainerStyle?: StyleType;
  itemSeparator?: React.ComponentType<any>;
  tableItemStyle?: StyleType;
  rightOptionIconName?: string;
}

export interface TableItemProps {
  item: StyleType;
  index: number;
}
