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
  // can be changed
  type: string,
  onPress?: () => void,
  // to show some loading state
  // inside the button its self
  loading?: boolean,
  disabled?: boolean,
  children?: ReactNode,
}
