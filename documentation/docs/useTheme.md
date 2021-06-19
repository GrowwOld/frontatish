---
id: useTheme
title: useTheme
sidebar_label: useTheme
---

useTheme is a custom hook which uses **ThemeContext** to fetch the current active theme and current color palette based on the active theme

> useTheme can only be used in a functional components,to get same functionality in class components you can use [withTheme](withTheme)

## Usage

```jsx
import { useTheme } from 'frontatish';

const App = () => {
  const { activeTheme, colors } = useTheme();
  return (
    <View style={{ backgroundColor: colors.primary }}>
      <MainApp />
    </View>
  );
};
```
