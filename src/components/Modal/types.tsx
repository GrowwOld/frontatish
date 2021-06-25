import { ReactNode } from 'react';

export interface ModalProps {
  open: boolean;
  close: () => void;
  children: ReactNode;
  contentHeight: number;
  swipeThreshold: number;
}
