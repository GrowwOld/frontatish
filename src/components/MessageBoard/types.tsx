// import { ViewStyle } from 'react-native';
import { StyleType } from '../../common/types';

// Message Board component props type
export interface MessageBoardProps {
  message: string;
  backgroundColor: string;
  fontColor: string;
  isDark: boolean;
  hasShadow?: boolean;
  iconName: string;
  iconColour: string;
  onPress?: () => void;
  customStyles?: StyleType;
}
