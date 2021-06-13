import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import { ColorPaletteType, ThemeType } from '../common/types';

interface ThemedProps {
  children: any;
  theme: ThemeType;
  colors: ColorPaletteType;
}

const ThemeProvider = (props: ThemedProps) => {
  const { children, theme, colors } = props;
  const [currentTheme, setCurrentTheme] = useState(theme);
  const toggleTheme = (newTheme: ThemeType) => {
    setCurrentTheme(newTheme);
  };
  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
