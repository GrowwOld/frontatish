---
id: emptyview
title: EmptyView
sidebar_label: EmptyView
---

Emptyview gives you a nice way to handle the empty state of your screen,like showing some api failure message or some illustration to illustrate user that there is not data on the screen.

<div className="image-horizontal-preview">
    <figure>
        <img src="/super/img/emptyview-1.png" alt="emptyview" height="350"/>
    </figure>
    <figure>
        <img src="/super/img/emptyview-2.png" alt="emptyview" height="350"/>
    </figure>
     <figure>
        <img src="/super/img/emptyviewdark.png" alt="emptyview" height="350"/>
    </figure>
</div>

## Usage

```jsx
import { EmptyView } from 'viserion';

<EmptyView
  title="This is title"
  subTitle="This is subtitle"
  actionTitle="TRY AGAIN"
  actionPress={() => {
    /* function definition to be called on button click */
  }}
  type="primary"
/>;
```

## Props

### `title`

The heading that will be shown on top of your error screen,it will be a string which renders under `Text` View so you can pass custom styles [titleStyle](#titlestyle).

|           Type            |        Default         |       Required        |
| :-----------------------: | :--------------------: | :-------------------: |
| string <img width="500"/> | none<img width="500"/> | No <img width="500"/> |

### `titleStyle`

custom `Text` Style object to style the title of your error message.

|             Type             |        Default         |       Required        |
| :--------------------------: | :--------------------: | :-------------------: |
| TextStyle <img width="500"/> | none<img width="500"/> | No <img width="500"/> |

### `subTitle`

The subheading that will be shown below the title of the error screen,like title it is also a string which renders under `Text` View,whose styles you can control with [subTitleStyle](#subtitlestyle)

|           Type            |        Default         |       Required        |
| :-----------------------: | :--------------------: | :-------------------: |
| string <img width="500"/> | none<img width="500"/> | No <img width="500"/> |

### `subTitleStyle`

custom `Text` Style object to style the subtitle of your error message.

|             Type             |        Default         |       Required        |
| :--------------------------: | :--------------------: | :-------------------: |
| TextStyle <img width="500"/> | none<img width="500"/> | No <img width="500"/> |


### `actionTitle`

`action` will let you to place a button in error screen so that user can perform any action,if some error occured or there is no data. so `actionTitle` will be the label of [Button](button).

|             Type             |        Default         |       Required        |
| :--------------------------: | :--------------------: | :-------------------: |
| string <img width="500"/> | none<img width="500"/> | No <img width="500"/> |


### `actionType`

using this props you can control the type of button to be used in the action part of the empty view,the values will be the same as [type](button#type) props of `Button` Component

### `actionPress`
it is a function to be called when user will press the button,it is similar as [onPress](button#onpress) props of `Button` Component
