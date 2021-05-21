import { ReactNode } from 'react';
import { StyleType } from '../../common/types';

export interface SwipeableModalProps {
  isOpen: boolean;
  children: ReactNode;
  hasBackdrop?: boolean;
  backdropOpacity?: number;
  swipeThreshold?: number;
  swipeable?: boolean;
  componentStyle?: StyleType;
  centerPositioned?: boolean;
  onSwipeComplete?: () => void;
  onBackdropPress?: () => void;
  onBackButtonPress: () => void;
  onCloseButtonPress?: () => void;
}
