---
id: withColors
title: withColors
sidebar_label: withColors
---


withColors is a higher order component which uses **ThemeContext** to fetch the current active themeand then use that value to get the colors which should be used as per the active theme.

> functionality is very similar to [useColors](),the only thing is that it is made to be used in class based components.since hooks are not supported in class based components


## Usage

```jsx

import { withColors } from 'frontatish';

class App extends React.Component{
  render() {
    const { Colors } = this.props;
    return (
      <View style={{backgroundColor: Colors.primary}}>
          <MainApp />
      </View>
    );
  }
}
export default withColors(App);
```
