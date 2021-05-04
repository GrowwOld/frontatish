import { ReactNode } from 'react';
import { StyleType } from '../../common/types';

export interface SwipableModalProps {
  children: ReactNode;
  isOpen: boolean;
  hasBackdrop?: boolean;
  backdropOpacity?: number;
  swipeThreshold?: number;
  swipable?: boolean;
  componentStyle?: StyleType;
  onSwipeComplete?: () => void;
  onBackdropPress?: () => void;
  onBackButtonPress: () => void;
  onCloseButtonPress?: () => void;
}
