import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

export interface ModalProps {
  open: boolean;
  onModalClose: () => void;
  children: ReactNode;
  contentHeight: number;
  animationInTiming?: number;
  animationOutTiming?: number;
  swipeThreshold: number;
  position?: 'top' | 'center' | 'bottom';
  entryDirection?: 'up' | 'down' | 'left' | 'right';
  exitDirection?: 'up' | 'down' | 'left' | 'right';
  swipeable?: boolean;
  hasCloseButton?: boolean;
  closeButtonStyle?: ViewStyle;
  onModalShow?: () => void;
  style?: ViewStyle;
  hasBackdrop?: boolean;
  backdropColor?: string;
  backdropOpacity?: number;
  onBackdropPressClose?: boolean;
  onBackButtonPressClose?: boolean;
}
