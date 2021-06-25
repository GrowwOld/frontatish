import React from 'react';
import { ColorPaletteType, ThemeType } from '../common/types';

export type ContextObjType = {
  currentTheme: ThemeType;
  toggleTheme: (theme: ThemeType) => void;
  colors?: ColorPaletteType;
};
const ThemeContext = React.createContext<ContextObjType>({
  currentTheme: 'light',
  toggleTheme: () => {},
});

export default ThemeContext;
