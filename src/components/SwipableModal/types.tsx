import { ReactNode } from 'react';

export interface SwipableModalProps {
  children: ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}
