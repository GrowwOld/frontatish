import { SyntheticEvent, ReactNode } from 'react';

export interface ButtonProps {
  label: string,
  // need to change
  type: string,
  onPress?: (event: SyntheticEvent) => void,
  disabled?: boolean,
  children?: ReactNode,

}
