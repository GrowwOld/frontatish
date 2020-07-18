import { useContext } from 'react';
import ThemeContext from './ThemeContext';
import ColorPalette from '../styles/colorPalette';

export const useColors = () => {
  const contextObj = useContext(ThemeContext);
  return ColorPalette[contextObj.currentTheme];
};

export const useTheme = () => {
  const contextObj = useContext(ThemeContext);
  return contextObj.currentTheme;
};
export const useThemeToggle = () => {
  const contextObj = useContext(ThemeContext);
  return contextObj.toggleTheme;
};
