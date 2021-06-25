import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

export interface ModalProps {
  open: boolean;
  onModalClose: () => void;
  children: ReactNode;
  contentHeight: number;
  swipeThreshold: number;
  position: 'top' | 'center' | 'bottom';
  entryDirection: 'up' | 'down' | 'left' | 'right';
  exitDirection: 'up' | 'down' | 'left' | 'right';
  swipeable: boolean;
  closeButton: boolean;
  onBackdropPress: () => void;
  onModalShow: () => void;
  containerStyle: ViewStyle;
  backdropColor: string;
  backdropOpacity: number;
}
