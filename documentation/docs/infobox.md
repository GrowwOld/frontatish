---
id: infobox
title: InfoBox
sidebar_label: InfoBox
---

Used for displaying information.

<div className="image-horizontal-preview">
    <figure>
      <img src="/frontatish/img/InfoBox.png" alt="primary-button" />
    </figure>
</div>

## Usage

```jsx
// react base imports

import { InfoBox } from 'frontatish';

// without icon, and borders
<InfoBox
    label="Default"
    backgroundColor="info"
/>

// with default icon: exclamationCircle
<InfoBox
    label="With default icon"
    backgroundColor="warning"
    icon
/>

// all the props
<InfoBox
    label="All props"
    backgroundColor="success"
    borderColor="warning"
    style={{ marginTop: 20 }}
    textStyle={{ color: '#ff00c4' }}
/>
```

## Props

### label

Label to display inside the info box

|           Type            |         Default         |        Required        |
| :-----------------------: | :---------------------: | :--------------------: |
| string <img width="500"/> | None <img width="500"/> | Yes <img width="500"/> |

### backgroundColor

Set background color from the values provided

|           Type            |            Default             |                 Values                  |       Required        |
| :-----------------------: | :----------------------------: | :-------------------------------------: | :-------------------: |
| string <img width="500"/> | info <img width="500"/> | info, success, warning, error, transparent <img width="500"/> | Yes <img width="500"/> |

### borderColor

Set border color from the values provided

|           Type            |            Default             |                 Values                  |       Required        |
| :-----------------------: | :----------------------------: | :-------------------------------------: | :-------------------: |
| string <img width="500"/> | none <img width="500"/> | info, success, warning, error <img width="500"/> | No <img width="500"/> |

### icon

Set as true for an exclamationCircle icon, or pass any of the [AntDesign icon names](https://oblador.github.io/react-native-vector-icons/)

|            Type            |              Default            |                    Values                   |     Required        |
| :------------------------: | :-----------------------------: | :-----------------------------------------: | :-----------------: |
| boolean or string <img width="500"/> | false or exclamationCircle when true <img width="500"/> | true, false, iconName from AntDesign  <img width="500"/>     |No <img width="500"/> |

### style

A react native style object which takes care of styling the InfoBox component as per your needs

|             Type             |         Default         |       Required        |
| :--------------------------: | :---------------------: | :-------------------: |
| ViewStyle <img width="500"/> | none <img width="500"/> | No <img width="500"/> |

### textStyle

A react native style object which takes care of text styling as per your needs

|             Type             |         Default         |       Required        |
| :--------------------------: | :---------------------: | :-------------------: |
| ViewStyle <img width="500"/> | none <img width="500"/> | No <img width="500"/> |
