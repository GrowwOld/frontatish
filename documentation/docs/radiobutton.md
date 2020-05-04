---
id: radiobutton
title: RadioButton
sidebar_label: RadioButton
---

Radio buttons helps to implement selection between multiple options, on the low level it uses `TouchableOpacity` of React-Native

<div className="image-horizontal-preview">
    <figure>
      <img src="/static/img/radio.png" alt="checkbox" width="300"/>
    </figure>
</div>


## Usage
```jsx
import { RadioButton } from 'growwsuper/components';

// normal
<RadioButton
  isDark={isDark}
  value="selected"
  onPress={radioPress}
  selected={choosen === 'selected'}
/>

// selected
<RadioButton
  isDark={isDark}
  value="option-1"
  onPress={radioPress}
  selected={true}
/>

// disable-selected
<RadioButton
  disabled
  isDark={isDark}
  value="disable-selected"
  selected
/>
// disabled-unselected
<RadioButton disabled isDark={isDark} value="disable-unselected" />

```

## Props

### `value`

The value of radio button

|           Type            |            Default             |       Required        |
| :-----------------------: | :----------------------------: | :-------------------: |
| string <img width="500"/> | '' <img width="500"/> | Yes <img width="500"/> |

### `selected`

Flag which helps to mark radio button selected or not

|           Type            |            Default             |       Required        |
| :-----------------------: | :----------------------------: | :-------------------: |
| boolean <img width="500"/> | false <img width="500"/> | Yes <img width="500"/> |

### `onPress`

Callback function which sets the `selected value` in the parent state

|            Type             |        Default         |        Required        |
| :-------------------------: | :--------------------: | :--------------------: |
| function <img width="500"/> | None<img width="500"/> | Yes <img width="500"/> |

### `disabled`
Flag to decide whether to disable the press on radio button or not

|            Type            |         Default          |       Required        |
| :------------------------: | :----------------------: | :-------------------: |
| boolean <img width="500"/> | false <img width="500"/> | No <img width="500"/> |

### `isDark`

This flags helps us to handle colors for dark mode changes in the component,if the parent component support theming then this will be useful to handle color visibilty in the dark mode as well.(*we might update this attribute to something else to handle theme in a better way*)

|           Type            |         Default         |        Required        |
| :-----------------------: | :---------------------: | :--------------------: |
| boolean <img width="500"/> | false <img width="500"/> | No <img width="500"/> |

