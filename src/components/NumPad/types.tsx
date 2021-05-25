/*
  Types related to Numpad component
  will be defined here,which can be
  used by helper method or the ui-co-
  mponents.
*/
// import { ReactNode } from 'react';
// import { StyleType } from '../../common/types';

// NumPad component props type
export interface NumPadProps {
  onItemClick: (keyStroke: string) => void;
  onDeleteItem: (keystroke?: string) => void;
  onSubmit: () => void;
}
