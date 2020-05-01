/*
  Types related to popup component
*/
import { ReactNode } from 'react';
import { Direction } from 'react-native-modal';

export interface PopupProps {
  children: ReactNode;
  closePopup: () => void;
  isDark?: boolean;
  isOpen: boolean;
  position?: 'bottom' | 'top' | 'center';
  swipeDirection: Direction | Direction[];
}

export interface PopupState {
  fake: boolean;
}
