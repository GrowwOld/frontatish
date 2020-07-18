export interface StyleType {
  [index: string]: number | string;
}
export interface ColorType {
  [index: string]: string;
}

export type AlignTypes =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | undefined;

export type DimensionType = 'xs' | 'sm' | 'md' | 'lg';
