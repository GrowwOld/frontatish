import { useContext } from 'react';
import ThemeContext, { ContextObjType } from './ThemeContext';
import ColorPalette from '../styles/colorPalette';

// @deprecated
export const useColors = () => {
  const contextObj = useContext(ThemeContext);
  return getActiveColors(contextObj);
};

export const useTheme = () => {
  const contextObj = useContext(ThemeContext);
  const colors = getActiveColors(contextObj);
  return {
    activeTheme: contextObj.currentTheme,
    colors,
  };
};
export const useThemeToggle = () => {
  const contextObj = useContext(ThemeContext);
  return contextObj.toggleTheme;
};

const getActiveColors = (context: ContextObjType) => {
  const activeLocalColor = ColorPalette[context.currentTheme];
  const activeCustomColor = context?.colors?.[context.currentTheme];
  return {
    ...activeLocalColor,
    ...activeCustomColor,
  };
};
