/*
  Types related to InfoBox component
  will be defined here,which can be
  used by helper method or the ui-co-
  mponent.
*/
import { StyleType } from '../../common/types';

export interface InfoBoxProps {
  label: string;
  backgroundColor: 'info' | 'success' | 'warning' | 'error' | 'transparent';
  icon: boolean | string;
  borderColor?:  'info' | 'success' | 'warning' | 'error';
  style?: StyleType;
  textStyle?: StyleType;
}
