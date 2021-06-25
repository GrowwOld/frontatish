---
id: themecontext
title: ThemeContext
sidebar_label: ThemeContext
---

ThemeContext is just a React Context Object which holds the values which you pass in ThemeProvider at the root of your app,the usage of ThemeContext is very similar how you consume the value from any other React Context Object.

[withTheme]() is one of the higher order component and [useColors]() which uses **ThemeContext** to get the current active theme of your app,so you can also directly use this context object and do any extra stuff if you want too.

## Usage

```jsx
import { ThemeContext } from 'frontatish';

<ThemeContext.Consumer>
  {(value) => {
    // value is the object passed at ThemeProvider
  }}
</ThemeContext.Consumer>;
```
