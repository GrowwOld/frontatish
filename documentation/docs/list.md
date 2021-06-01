---
id: list
title: List
sidebar_label: List
---

List component.

<div>
    <figure>
      <img src="/frontatish/img/listExample.png" alt="list" />
    </figure>
</div>

## Usage

```jsx
// react base imports

import { List } from 'frontatish';

<List leftLabel="Plain Text" onPress={onPress} />
<List leftLabel="Plain Text" rightLabel="$2,33,6755" onPress={onPress} />
<List
    leftLabel="Plain Text"
    leftSubtext="Subtext"
    rightLabel="$2,33,675"
    rightChipLabel="Chip"
    onPress={onPress}
/>
<List
    leftLabel="Plain Text"
    leftSubtext="Subtext"
    rightLabel="$2,33,675"
    rightChipLabel="Chip"
    sparkLine
    onPress={onPress}
/>
<List
    leftLabel="Plain Text"
    leftSubtext="Subtext"
    rightLabel="$2,33,675"
    rightSubtext="Subtitle"
    rightChipLabel="Chip"
    disabled
    sparkLine
    leftChipLabel="Chip"
    onPress={onPress}
/>

```

## Props

### leftLabel

Label to display on left side of List.

|           Type            |         Default         |        Required        |
| :-----------------------: | :---------------------: | :--------------------: |
| string <img width="500"/> | None <img width="500"/> | Yes <img width="500"/> |

### leftSubtext

Subtext to display on left side of List.

|           Type            |         Default         |       Required        |
| :-----------------------: | :---------------------: | :-------------------: |
| string <img width="500"/> | None <img width="500"/> | No <img width="500"/> |

### rightLabel

Label to display on right side of List.

|           Type            |         Default         |       Required        |
| :-----------------------: | :---------------------: | :-------------------: |
| string <img width="500"/> | None <img width="500"/> | No <img width="500"/> |

### rightSubtext

Subtext to display on right side of List.

|           Type            |         Default         |       Required        |
| :-----------------------: | :---------------------: | :-------------------: |
| string <img width="500"/> | None <img width="500"/> | No <img width="500"/> |

### leftChipLabel

A Chip will be displayed on left side of List if leftChipLabel is passed with label leftChipLabel.

|           Type            |         Default         |       Required        |
| :-----------------------: | :---------------------: | :-------------------: |
| string <img width="500"/> | None <img width="500"/> | No <img width="500"/> |

### rightChipLabel

A Chip will be displayed on right side of List if rightChipLabel is passed with label rightChipLabel.

|           Type            |         Default         |       Required        |
| :-----------------------: | :---------------------: | :-------------------: |
| string <img width="500"/> | None <img width="500"/> | No <img width="500"/> |

### sparkLine

A sparkLine is displayed in middle of List if sparkLine is true.

|            Type            |         Default          |       Required        |
| :------------------------: | :----------------------: | :-------------------: |
| boolean <img width="500"/> | false <img width="500"/> | No <img width="500"/> |

### disabled

disabled make sure if its true then user won't be able to click it and the onPress would not get called

|            Type            |         Default          |       Required        |
| :------------------------: | :----------------------: | :-------------------: |
| boolean <img width="500"/> | false <img width="500"/> | No <img width="500"/> |

### onPress

Function to be called when user taps on the button

|            Type             |        Default         |        Required        |
| :-------------------------: | :--------------------: | :--------------------: |
| function <img width="500"/> | None<img width="500"/> | Yes <img width="500"/> |

### labelStyle

A react native style object which takes care of styling the left and right label.

|             Type             |         Default         |       Required        |
| :--------------------------: | :---------------------: | :-------------------: |
| TextStyle <img width="500"/> | none <img width="500"/> | No <img width="500"/> |

### subtextStyle

A react native style object which takes care of styling the left and right subtext.

|             Type             |         Default         |       Required        |
| :--------------------------: | :---------------------: | :-------------------: |
| TextStyle <img width="500"/> | none <img width="500"/> | No <img width="500"/> |

### containerStyle

A react native style object which takes care of styling the list component.

|             Type             |         Default         |       Required        |
| :--------------------------: | :---------------------: | :-------------------: |
| ViewStyle <img width="500"/> | none <img width="500"/> | No <img width="500"/> |
