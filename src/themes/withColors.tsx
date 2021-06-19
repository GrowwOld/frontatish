// higher order component to wrap the incoming component
// with the current active color object
import React from 'react';
import ThemeContext from './ThemeContext';
import ColorPalette from '../styles/colorPalette';

export default function withColors<P extends Object>(
  ComposedComponent: React.ComponentType<P>,
) {
  function EnhancedComponent(props: P) {
    return (
      <ThemeContext.Consumer>
        {(value) => {
          const { currentTheme, toggleTheme } = value;
          const Colors = ColorPalette[currentTheme];
          return (
            <ComposedComponent
              {...props}
              Colors={Colors}
              toggleTheme={toggleTheme}
            />
          );
        }}
      </ThemeContext.Consumer>
    );
  }
  return EnhancedComponent;
}
