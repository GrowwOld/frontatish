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
  rightKeyOnPress?: () => void;
  title: string;
  titleTextStyle?: StyleType;
  topContainerStyle?: StyleType;
}

export interface TableItemProps {
  item: StyleType;
  index: number;
}
