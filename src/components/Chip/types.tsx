import { StyleType } from '../../common/types';

export interface ChipProps {
  label: string;
  style?: StyleType;
  onPress?: () => null;
  disabled?: boolean;
}
