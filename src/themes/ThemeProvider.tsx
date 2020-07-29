import React, { useState } from 'react';
import ThemeContext from './ThemeContext';

interface ThemedProps {
  children: any;
  theme: string;
}

const ThemeProvider = (props: ThemedProps) => {
  const { children, theme } = props;
  const [currentTheme, setCurrentTheme] = useState(theme);
  const toggleTheme = (newTheme) => {
    setCurrentTheme(newTheme);
  };
  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
