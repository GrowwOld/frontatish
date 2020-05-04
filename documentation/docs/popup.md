---
id: popup
title: Popup
sidebar_label: Popup
---

Popup component is used to show content on top of everything,so your main view goes behind it,its just an implementation of basic Modal which we used to see many webpages,also React native has support of it.
At the low level we have used [react-native-modal](https://www.npmjs.com/package/react-native-modal),in which we have made some slight modifications for our purposes.

<div>
    <figure>
      <img src="/static/img/popup.png" alt="popup" height="400"/>
    </figure>
</div>


## Usage

```jsx
// react base imports

import { Popup } from 'growwsuper/components';

<Popup
  isOpen={isOpen}
  isDark={isDark}
  position="bottom"
  closePopup={closePopup}
  swipeDirection="down"
  swipeThreshold={10}
  childrenContainerStyle={{ backgroundColor: Colors.WHITE }}
>
  <View style={{ padding: 20 }}>
    <Text
      style={[
        Fonts.style.h5,
        { marginVertical: 20, color: Colors.BLACK },
      ]}
    >
      This popup contains the custom keypad component
    </Text>
  </View>
</Popup>

```
## Props

### `isOpen`

Flag which decides whether to render a popup or not in the current `View`

|            Type             |        Default         |        Required        |
| :-------------------------: | :--------------------: | :--------------------: |
| boolean <img width="500"/> | false<img width="500"/> | Yes <img width="500"/> |

---

### `isDark`

This flags helps us to handle colors for dark mode changes in the component,if the parent component support theming then this will be useful to handle color visibilty in the dark mode as well.(*we might update this attribute to something else to handle theme in a better way*)

|           Type            |         Default         |        Required        |
| :-----------------------: | :---------------------: | :--------------------: |
| boolean <img width="500"/> | false <img width="500"/> | No <img width="500"/> |

---

### `position`

This helps popup to decide on which part of screen to render the popup

|        Type         |    Default     |     Values     | Required|
| :-----------------: | :------------: | :------------:   | :------------:
| string <img width="500"/> | **bottom** <img width="500"/> |  oneOf(bottom,top,center) <img width="500"/> | No <img width="500"/>

---

### `children`

It is just a react-native view,in which you create the layout as per you need
|            Type             |        Default         |        Required        |
| :-------------------------: | :--------------------: | :--------------------: |
| ReactNode <img width="500"/> | none<img width="500"/> | Yes <img width="500"/> |

---

### `childrenContainerStyle`

It is just a normal react-native style object to give the custom style to the container of your popup content

|            Type             |        Default         |        Required        |
| :-------------------------: | :--------------------: | :--------------------: |
| ViewStyle <img width="500"/> | none<img width="500"/> | No <img width="500"/> |

---

### `closePopup`

Accepts a callback function which set `isOpen` to `false` so that the popup can be closed on required actions of the user

|            Type             |        Default         |        Required        |
| :-------------------------: | :--------------------: | :--------------------: |
| function <img width="500"/> | none<img width="500"/> | Yes <img width="500"/> |

---


### `swipeDirection`

Can be a string or array of string which would specify the direction of swipe for a popup

|            Type             |        Default         |        Required        |
| :-------------------------: | :--------------------: | :--------------------: |
| string or string[] <img width="500"/> | none<img width="500"/> | No <img width="500"/> |

---
