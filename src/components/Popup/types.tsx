/*
  Types related to popup component
*/
import { ModalProps } from 'react-native-modal';
import { ViewStyle } from 'react-native';

export interface PopupProps extends ModalProps {
  closePopup: () => void;
  isDark?: boolean;
  isOpen: boolean;
  position?: 'bottom' | 'top' | 'center';
  childrenContainerStyle: ViewStyle;
}

export interface PopupState {
  flexValue: number;
}
