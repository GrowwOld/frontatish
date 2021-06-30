---
id: radioGroup
title: RadioGroup
sidebar_label: RadioGroup
---

RadioGroup is a wrapper to the [RadioButton](radioButton) Component that eases the use of multiple Radio Buttons without worrying about the onPress logic of each radio Button and handling the selected state. On the lower level it uses `TouchableOpacity` of React-Native.

<div className="image-horizontal-preview">
    <figure>
      <img src="/frontatish/img/radioGroup_light.png" alt="radioGroup"  />
    </figure>
    <figure>
      <img src="/frontatish/img/radioGroup_dark.png" alt="radioGroup"  />
    </figure>
</div>

## Usage

```jsx
import { RadioButton,RadioGroup } from 'frontatish';

<RadioGroup
  onChange={(selectedValue:string)=>void}
  defaultValue="value1"
>
    <RadioButton value="value1" />
    <RadioButton value="value2"/>
    <RadioButton value="value3"/>

</RadioGroup>
```

## Props

### onChange

Callback function that is called whenever the selected radio button is changed.

|            Type             |         Default         |                                                              Signature                                                              |        Required        |
| :-------------------------: | :---------------------: | :---------------------------------------------------------------------------------------------------------------------------------: | :--------------------: |
| function <img width="500"/> | None <img width="500"/> | `function(selectedValue: string) => void` <br/>where `selectedValue` is the newly selected RadioButton's `value` <img width="500"/> | Yes <img width="500"/> |

### defaultValue

Defines the `value` of RadioButton to be selected initially. If the `defaultValue` matches none of the child RadioButton's `value`, no RadioButton would be selected initially.

|           Type            |         Default         |       Required        |
| :-----------------------: | :---------------------: | :-------------------: |
| string <img width="500"/> | None <img width="500"/> | No <img width="500"/> |

### size

Defines the size of all child RadioButtons, can be over-ridden by setting the `size` prop of child RadioButtons individually.

|                       Type                       |        Default        |       Required        |
| :----------------------------------------------: | :-------------------: | :-------------------: |
| string (xs \| sm \| md \| lg) <img width="500"/> | sm <img width="500"/> | No <img width="500"/> |

### containerStyle

Defines the style of individual child RadioButtons, can be over-ridden by setting the `containerStyle` prop of child RadioButtons individually.

|                 Type                  |         Default         |       Required        |
| :-----------------------------------: | :---------------------: | :-------------------: |
| object (StyleType) <img width="500"/> | None <img width="500"/> | No <img width="500"/> |

### labelStyle

Defines the text style of individual child RadioButtons, can be over-ridden by setting the `labelStyle` prop of child RadioButtons individually.

|                  Type                   |         Default         |       Required        |
| :-------------------------------------: | :---------------------: | :-------------------: |
| object ( StyleType ) <img width="500"/> | None <img width="500"/> | No <img width="500"/> |

### style

Defines the style of RadioGroup, can be used to tweak the arrangement of RadioButtons within the RadioGroup View.

|                 Type                  |         Default         |       Required        |
| :-----------------------------------: | :---------------------: | :-------------------: |
| object (StyleType) <img width="500"/> | None <img width="500"/> | No <img width="500"/> |

#### Example

```jsx
{
  /*Positions RadioButtons in a Horizontal Row*/
}

<RadioGroup style={{ flexDirection: 'row' }} onChange={someOnChangeListener}>
  {/* Child Radio Buttons*/}
</RadioGroup>;
```

### childProps

The child RadioButtons support all its [original props](radioButton#props) except the `selected` and `onPress`.
