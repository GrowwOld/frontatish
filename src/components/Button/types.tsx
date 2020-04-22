/*
  Types related to button component
  will be defined here,which can be
  used by helper method or the ui-co-
  mponent.
*/
import { ReactNode } from 'react';

// Button component props type
export interface ButtonProps {
  children?: ReactNode,
  disabled?: boolean,
  isDark?: boolean | undefined | null,
  loading?: boolean,
  label: string,
  // can be changed
  type: 'primary' | 'secondary' | 'default',
  onPress?: () => void,
  // to show some loading state
  // inside the button its self
}

export interface ButtonStyles {
  backgroundColor?: string,
  borderWidth?: number,
  borderColor?: string,
  borderRadius?: number
}
