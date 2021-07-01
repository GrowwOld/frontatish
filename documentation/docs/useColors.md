---
id: useColors
title: useColors(deprecated)
sidebar_label: useColors(deprecated)
---

useColors is a custom hook which uses **useContext** to fetch the current active theme and then use that value to get the colors which should be used as per the active theme.

> useColors can only be used in a functional components,to get same functionality in class components you can use [withTheme](withTheme)

## Usage

```jsx
import { useColors } from 'frontatish';

const App = () => {
  const Colors = useColors();
  return (
    <View style={{ backgroundColor: Colors.primary }}>
      <MainApp />
    </View>
  );
};
```
