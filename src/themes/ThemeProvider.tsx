import React from 'react';
import ThemeContext from './ThemeContext';

interface ThemedProps {
  children: any;
  currentTheme: string;
}

const ThemeProvider = (props: ThemedProps) => {
  const { children, currentTheme } = props;
  return (
    <ThemeContext.Provider value={currentTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
