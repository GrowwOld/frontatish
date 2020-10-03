import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import { ColorType } from '../common/types';

interface ThemedProps {
  children: any;
  theme: string;
  colors?: ColorType;
}

const ThemeProvider = (props: ThemedProps) => {
  const { children, theme } = props;
  const [currentTheme, setCurrentTheme] = useState(theme);
  const toggleTheme = (newTheme: string) => {
    setCurrentTheme(newTheme);
  };
  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
