---
id: themeprovider
title: ThemeProvider
sidebar_label: ThemeProvider
---

ThemeProvider gives you an option to pass your theme or colors to your child components which will be rendered in the tree,it uses [react-context-api](https://reactjs.org/docs/context.html) to control the values which are being passed down,that can be used by [useColors]() or [withColors]() to make this work seamlessly.

## Usage
```jsx

import { ThemeProvider } from 'frontatish';


<ThemeProvider theme="light" colors={colors}>
  <AppNavigation>
</ThemeProvider>

```

## Props

### `theme`
It helps the **context** to determine which colors to use based on the value which is passed,so the value which are being passed here must match to the keys of **colors** object your are passing.


### `colors`
It is javascript object where every **key** represents a full set of colors, that key must match to the theme you are passing to the **ThemeProvider**, below is the example which can give you a fair idea how to structure you color object before passing it to ThemeProvider.

```json
const colors = {
    light: {
      primary: "#fff",
    },
    dark: {
      primary: "#000",
    }
}
```
