---
id: switch
title: Switch
sidebar_label: Switch
---

Switch component gives an option to the user to toggle between two option to either pick one of the value base the switch value,this can be helpful when you are giving the user an option to choose between any two option.

<div className="image-horizontal-preview">
    <figure>
        <img src="/frontatish/img/switch.png" alt="NumberPad" height="50"/>
    </figure>
    <figure>
        <img src="/frontatish/img/switch_2.png" alt="NumberPad" height="50"/>
    </figure>
</div>

## Usage

```jsx
<Switch
  isOn={isOn}
  onColor="#00D09C"
  offColor="#E6E7E8"
  // label="Example label"
  // size="small"
  onToggle={onThemeSwitch}
/>
```

## Props

### isOn

A boolean value to keep track whether the switch value is active or deactive.

|            Type            |         Default         |        Required        |
| :------------------------: | :---------------------: | :--------------------: |
| boolean <img width="500"/> | false<img width="500"/> | Yes <img width="500"/> |

### onColor

color which you want to have as switch component's background when its **_ON_**

|           Type            |          Default          |       Required        |
| :-----------------------: | :-----------------------: | :-------------------: |
| string <img width="500"/> | #00D09C<img width="500"/> | No <img width="500"/> |

### offColor

color which you want to have as switch component's background when its **_OFF_**

|           Type            |          Default          |       Required        |
| :-----------------------: | :-----------------------: | :-------------------: |
| string <img width="500"/> | #EBEBF5<img width="500"/> | No <img width="500"/> |

### onToggle

callback function that will be called to set `isOn` in your Parent component's state to control you ui with it.

|            Type             |        Default         |       Required        |
| :-------------------------: | :--------------------: | :-------------------: |
| function <img width="500"/> | None<img width="500"/> | Yes<img width="500"/> |

### size

you can set this props to control your dimension of switch

|                   Type                    |       Default        |       Required       |
| :---------------------------------------: | :------------------: | :------------------: |
| enum('sm', 'md', 'lg') <img width="500"/> | md<img width="500"/> | No<img width="500"/> |

### icon

You can pass custom icon for switch to make the ui more impressive,like if you are having light mode and dark mode then you can pass sunlight and moonlight icon into switch to make you switch to look much more good.
you can use [react-native-vector-icons](https://www.npmjs.com/package/react-native-vector-icons) to send **_ON_** & **_OFF_** icons

|             Type             |        Default         |       Required       |
| :--------------------------: | :--------------------: | :------------------: |
| ReactNode <img width="500"/> | None<img width="500"/> | No<img width="500"/> |

### disabled

boolean to disable click event on the switch

|            Type            |         Default         |       Required       |
| :------------------------: | :---------------------: | :------------------: |
| boolean <img width="500"/> | false<img width="500"/> | No<img width="500"/> |
