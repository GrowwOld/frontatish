---
id: infobox
title: InfoBox
sidebar_label: InfoBox
---

About InfoBox usecase here.

<div className="image-horizontal-preview">
    <figure>
      <img src="/frontatish/img/InfoBox.png" alt="primary-button" />
    </figure>
</div>

## Usage

```jsx
// react base imports

import { InfoBox } from 'frontatish';

// without icon
<InfoBox
    label="InfoBox"
    backgroundColor="info"
    borderColor="warning"
    style={{ marginTop: 20 }}
    textStyle={{ color: '#ff00c4' }}
/>

<InfoBox
    label="InfoBox"
    backgroundColor="info"
    borderColor="warning"
    icon="github"
    style={{ marginTop: 20 }}
    textStyle={{ color: '#ff00c4' }}
/>
```

## Props

### label

Label to display inside the button

|           Type            |         Default         |        Required        |
| :-----------------------: | :---------------------: | :--------------------: |
| string <img width="500"/> | None <img width="500"/> | Yes <img width="500"/> |

### backgroundColor

On the basis of **type** passed to component, it applies the defined style to it

|           Type            |            Default             |                 Values                  |       Required        |
| :-----------------------: | :----------------------------: | :-------------------------------------: | :-------------------: |
| string <img width="500"/> | info <img width="500"/> | info, success, warning, error, transparent <img width="500"/> | Yes <img width="500"/> |

### borderColor

On the basis of **type** passed to component, it applies the defined style to it

|           Type            |            Default             |                 Values                  |       Required        |
| :-----------------------: | :----------------------------: | :-------------------------------------: | :-------------------: |
| string <img width="500"/> | none <img width="500"/> | info, success, warning, error <img width="500"/> | No <img width="500"/> |

### icon

disabled make sure if its true then user won't be able to click it and the onPress would not get called

|            Type            |              Default            |                    Values                   |     Required        |
| :------------------------: | :-----------------------------: | :-----------------------------------------: | :-----------------: |
| boolean or string <img width="500"/> | false <img width="500"/> | true, false, iconName from AntDesign  <img width="500"/>     |No <img width="500"/> |

### style

A react native style object which takes care of styling the button component as per your needs

|             Type             |         Default         |       Required        |
| :--------------------------: | :---------------------: | :-------------------: |
| ViewStyle <img width="500"/> | none <img width="500"/> | No <img width="500"/> |

### textStyle

A react native style object which takes care of styling the button component as per your needs

|             Type             |         Default         |       Required        |
| :--------------------------: | :---------------------: | :-------------------: |
| ViewStyle <img width="500"/> | none <img width="500"/> | No <img width="500"/> |
