export interface StyleType {
  [index: string]: number | string;
}
export interface ColorType {
  [index: string]: string;
}

export interface ColorPaletteType {
  light: ColorType;
  dark: ColorType;
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
export type ThemeType = 'light' | 'dark';
