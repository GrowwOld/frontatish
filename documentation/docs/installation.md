---
id: installation
title: Installation
sidebar_label: Installation
---

:::info
The library is still under development,create issues [here](https://github.com/Groww/frontatish/issues/new)
:::

```bash
yarn add frontatish
or
npm install frontatish
```

## Requirements

This library depends on some third party library like [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons#installation) , [react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/docs/#installation) & [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/docs/getting_started)

If you are at **_>0.60_** react-native versions then you don't need to link these libraries or if you are at below to this version you would need to link it manually these libraries into your project.

```bash
react-native link <package-name>
```

## Usage

```jsx
import React from 'react';
import { View } from 'react-native';
import { Button } from 'frontatish';

const App = () => {
  return (
    <View>
      <Button label="PRESS ME!">
    </View>
  );
}

```
