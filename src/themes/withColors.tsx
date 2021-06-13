// higher order component to wrap the incoming component
// with the current active color object
import React from 'react';
import ThemeContext from './ThemeContext';
import ColorPalette from '../styles/colorPalette';

export default function withColors(ComposedComponent: typeof React.Component) {
  function EnhancedComponent(props: any) {
    return (
      <ThemeContext.Consumer>
        {(value) => {
          const { currentTheme, toggleTheme, colors } = value;
          const activeLocalColor = ColorPalette[currentTheme];
          const activeCustomColor = colors?.[currentTheme];
          const Colors = {
            ...activeLocalColor,
            ...activeCustomColor,
          };

          return (
            <ComposedComponent
              {...props}
              Colors={Colors}
              toggleTheme={toggleTheme}
              currentTheme={currentTheme}
            />
          );
        }}
      </ThemeContext.Consumer>
    );
  }
  return EnhancedComponent;
}
