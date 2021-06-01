---
id: chip
title: Chip
sidebar_label: Chip
---

Chip component can be used to display content in small boxes.

<div className="image-horizontal-preview">
    <figure>
      <img src="/frontatish/img/button-light.png" alt="primary-button" />
    </figure>
    <figure>
      <img src="/frontatish/img/button-dark.png" alt="secondary-button" />
    </figure>
</div>

## Usage

```jsx
// react base imports

import { Chip } from 'frontatish';

<Chip label="Chip" />;
```

## Props

### label (required)

Label to display inside the button.

|           Type            |         Default         |        Required        |
| :-----------------------: | :---------------------: | :--------------------: |
| string <img width="500"/> | None <img width="500"/> | Yes <img width="500"/> |

### onPress

Function to be called when user taps on the button.

|            Type             |        Default         |       Required        |
| :-------------------------: | :--------------------: | :-------------------: |
| function <img width="500"/> | None<img width="500"/> | No <img width="500"/> |

### isSelected

State variable which toggles on clicking on the Chip component.

|            Type            |         Default          |       Required        |
| :------------------------: | :----------------------: | :-------------------: |
| boolean <img width="500"/> | false <img width="500"/> | No <img width="500"/> |

### disabled

Disabled make sure if its true then user won't be able to click it and the onPress would not get called.

|            Type            |         Default          |       Required        |
| :------------------------: | :----------------------: | :-------------------: |
| boolean <img width="500"/> | false <img width="500"/> | No <img width="500"/> |

### iconName

If iconName is passed then an icon is appended in front of label.

|           Type            |         Default         |       Required        |
| :-----------------------: | :---------------------: | :-------------------: |
| string <img width="500"/> | None <img width="500"/> | No <img width="500"/> |

### iconStyle

A react native style object which takes care of styling of icon in Chip component.

|             Type             |         Default         |       Required        |
| :--------------------------: | :---------------------: | :-------------------: |
| ViewStyle <img width="500"/> | None <img width="500"/> | No <img width="500"/> |

### onClose

If onClose is passed then a cross icon will be displayed after label clicking upon which this function will be called.

|            Type             |         Default         |       Required        |
| :-------------------------: | :---------------------: | :-------------------: |
| function <img width="500"/> | None <img width="500"/> | No <img width="500"/> |

### labelStyle

A react native style object which takes care of styling the label.

|             Type             |         Default         |       Required        |
| :--------------------------: | :---------------------: | :-------------------: |
| TextStyle <img width="500"/> | None <img width="500"/> | No <img width="500"/> |

### containerStyles

A react native style object which takes care of styling the Chip component.

|             Type             |         Default         |       Required        |
| :--------------------------: | :---------------------: | :-------------------: |
| ViewStyle <img width="500"/> | None <img width="500"/> | No <img width="500"/> |

### selectedContainerStyle

A react native style object which takes care of styling the Chip component when selected.

|             Type             |         Default         |       Required        |
| :--------------------------: | :---------------------: | :-------------------: |
| ViewStyle <img width="500"/> | None <img width="500"/> | No <img width="500"/> |
