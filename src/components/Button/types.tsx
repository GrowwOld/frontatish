/*
  Types related to button component
  will be defined here,which can be
  used by helper method or the ui-co-
  mponent.
*/
import { ReactNode } from 'react';

// Button component props type
export interface ButtonProps {
  label: string,
  // need to change
  type: string,
  onPress?: () => void,
  disabled?: boolean,
  children?: ReactNode,
}
