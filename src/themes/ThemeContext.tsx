import React from 'react';
import { ColorType } from '../common/types';

interface contextObjType {
  currentTheme: string;
  toggleTheme: (theme: string) => void;
  colors?: ColorType;
}
const ThemeContext = React.createContext<contextObjType>({
  currentTheme: 'light',
  toggleTheme: () => {},
});

export default ThemeContext;
