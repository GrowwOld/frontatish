import { StyleType } from '../../common/types';

export interface ChipProps {
  label: string;
  isSelected?: boolean;
  onPress?: () => void;
  disabled?: boolean;
  iconName?: string;
  iconStyle?: StyleType;
  onClose?: () => void;
  labelStyle?: StyleType;
  containerStyle?: StyleType;
  selectedContainerStyle?: StyleType;
}
