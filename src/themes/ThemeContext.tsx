import React from 'react';
import { ColorPaletteType, ThemeType } from '../common/types';

interface conttextObjType {
  currentTheme: ThemeType;
  toggleTheme: (theme: ThemeType) => void;
  colors?: ColorPaletteType;
}
const ThemeContext = React.createContext<conttextObjType>({
  currentTheme: 'light',
  toggleTheme: () => {},
});

export default ThemeContext;
