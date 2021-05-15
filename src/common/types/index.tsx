import { LIGHT_MODE_COLORS } from '../../styles/colorPalette';

export interface StyleType {
  [index: string]: number | string;
}
export type ColorType = typeof LIGHT_MODE_COLORS;

export type AlignTypes =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | undefined;

export type DimensionType = 'xs' | 'sm' | 'md' | 'lg';
