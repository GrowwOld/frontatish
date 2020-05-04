---
id: checkbox
title: CheckBox
sidebar_label: CheckBox
---

Checkbox component makes easy to turn and option on and off,which can be usefull to make ui for giving user an option to choose on something. On the lower level it uses [react-native-vector-icons](https://www.npmjs.com/package/react-native-vector-icons)

<div className="image-horizontal-preview">
    <figure>
      <img src="/static/img/checkbox.png" alt="checkbox" />
    </figure>
</div>

## Usage

```jsx
// react base imports

import { Checkbox } from 'growwsuper/components';

// normal checkbox
  <CheckBox
    isDark={true}
    checked={true}
    onPress={() => void}
    containerStyle={{ marginRight: 20 }}
  />

// disabled checkbox
  <CheckBox
    checked={checked}
    disable={true}
    isDark={isDark}
    onPress={() => void}
    containerStyle={{ marginRight: 20 }}
  />

```

## Props

### `onPress`

Callback function that needed to be passed which updates the state of checkbox,to hanle both checked and unchecked state of a checkbox.

|            Type             |        Default         |        Required        |
| :-------------------------: | :--------------------: | :--------------------: |
| function <img width="500"/> | None<img width="500"/> | Yes <img width="500"/> |

---

### `checked`

checked will be a state variable which hold the state of the checkbox,on which checkbox will decide when to show check icon and when to not

|           Type            |            Default             |       Required        |
| :-----------------------: | :----------------------------: | :-------------------: |
| boolean <img width="500"/> | false <img width="500"/> | No <img width="500"/> |

---

### `isDark`

This flags helps us to handle colors for dark mode changes in the component,if the parent component support theming then this will be useful to handle color visibilty in the dark mode as well.(*we might update this attribute to something else to handle theme in a better way*)

|           Type            |         Default         |        Required        |
| :-----------------------: | :---------------------: | :--------------------: |
| boolean <img width="500"/> | false <img width="500"/> | No <img width="500"/> |

---

### `disabled`

disabled make sure if its true then user won't be able to click it and the onPress would not get called

|            Type            |         Default          |       Required        |
| :------------------------: | :----------------------: | :-------------------: |
| boolean <img width="500"/> | false <img width="500"/> | No <img width="500"/> |

### `containerStyles`

A react native style object which gives flexibility to alter the styles of checkobox container

|             Type             |         Default         |       Required        |
| :--------------------------: | :---------------------: | :-------------------: |
| ViewStyle <img width="500"/> | none <img width="500"/> | No <img width="500"/> |
