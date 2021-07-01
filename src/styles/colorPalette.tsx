export const LIGHT_MODE_COLORS = {
  white: '#FFFFFF',
  constant_white: '#FFFFFF',
  primary: '#00D09C',
  transparent: 'transparent',

  // attribute colors
  primary_attr: '#00D09C',
  // 40% white of primary color
  primary_attr_40: '#66E3C4',
  // 90% white of primary color
  primary_attr_90: '#E5FAF5',

  secondary: '#5367FF',
  secondary_30: '#4E5DCE',
  secondary_40: '#98A4FF',

  semantic_yellow: '#FFB61B',
  semantic_red: '#EB5B3C',
  semantic_green: '#00D09C',

  // Neutrals and text
  font_1: '#44475B',
  font_2: '#8F919D',
  font_3: '#C7C8CE',
  font_4: '#DDDEE1',
  font_5: '#ECEDEF',
  font_6: '#F9F9FA',
  font_7: '#44475B',
};

export const DARK_MODE_COLORS = {
  white: '#121212',
  constant_white: '#FFFFFF',
  primary: '#0ABB92',
  transparent: 'transparent',
  // attribute colors
  primary_attr: '#0ABB92',
  // 40% white of primary color
  primary_attr_40: '#00D09C',
  // 90% white of primary color
  primary_attr_90: '#0E231E',

  secondary: 'rgba(83, 103, 255, 0.8)',
  secondary_30: '#4E5DCE',
  secondary_40: '#181A2A',

  semantic_yellow: '#E7A61A',
  semantic_red: '#D55438',
  semantic_green: 'rgba(10, 187, 146, 0.8)',
  // Neutrals and text
  font_1: '#EBEBF5',
  font_2: '#707074',
  font_3: '#4D4D4D',
  font_4: '#2A2A2A',
  font_5: '#1D1D1D',
  font_6: '#171717',
  font_7: '#44475B',
};

const Colors = {
  light: { ...LIGHT_MODE_COLORS },
  dark: { ...DARK_MODE_COLORS },
};

export default Colors;
