import React from 'react';
import { ColorType } from '../common/types';

interface conttextObjType {
  currentTheme: string;
  toggleTheme: (theme: string) => void;
  colors?: ColorType;
}
const ThemeContext = React.createContext<conttextObjType>({
  currentTheme: 'light',
  toggleTheme: () => {},
});

export default ThemeContext;
