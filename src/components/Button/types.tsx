/*
  Types related to button component
  will be defined here,which can be
  used by helper method or the ui-co-
  mponent.
*/
import { ReactNode } from 'react';
import { StyleType } from '../../common/types';

// Button component props type
export interface ButtonProps {
  children?: ReactNode,
  disabled?: boolean | null,
  isDark?: boolean,
  loading?: boolean,
  label: string,
  // can be changed
  type: 'primary' | 'secondary' | 'default',
  onPress?: () => void,
  customStyles: StyleType,
  // to show some loading state
  // inside the button its self
}

