---
id: draggableList
title: Draggable List
sidebar_label: Draggable List
---

Draggable List helps you make flatlists in which you can drag and drop items and change their position.

<div className="image-horizontal-preview">
    <figure>
      <img src="/frontatish/img/draggableList.gif" alt="draggable-list" width="250" height="500" />
    </figure>
    
</div>

## Usage

```jsx
// react base imports

import { DraggableList } from 'frontatish';

<DraggableList
  listRenderItem={listRenderItem}
  flatlistTopOffset={flatListTopOffset}
  setDraggingIdx={setDraggingIdx}
  setData={setData}
  ITEM_HEIGHT={ITEM_HEIGHT}
  listData={data}
  HOLD_TIME={300}
/>;
```

## Props

### listRenderItem

Takes an item from data and renders it into the list.

|            Type             |        Default         |                 Signature                  |        Required        |
| :-------------------------: | :--------------------: | :----------------------------------------: | :--------------------: |
| function <img width="500"/> | None<img width="500"/> | ({item, index},panResponder ) => ReactNode | Yes <img width="500"/> |

### listData

Data is a plain array passed to flatlist.

|           Type            |         Default         |        Required        |
| :-----------------------: | :---------------------: | :--------------------: |
| any[ ] <img width="500"/> | None <img width="500"/> | Yes <img width="500"/> |

### setData

function to update the data.

|            Type             |        Default         |     Signature      |        Required        |
| :-------------------------: | :--------------------: | :----------------: | :--------------------: |
| function <img width="500"/> | None<img width="500"/> | (newData ) => void | Yes <img width="500"/> |

### setDraggingIdx

function to set the current index being dragged.

|            Type             |        Default         |       Signature        |        Required        |
| :-------------------------: | :--------------------: | :--------------------: | :--------------------: |
| function <img width="500"/> | None<img width="500"/> | (draggingIdx ) => void | Yes <img width="500"/> |

### flatlistTopOffset

Offset of flatlist from the top of the screen.

|           Type            |         Default         |        Required        |
| :-----------------------: | :---------------------: | :--------------------: |
| number <img width="500"/> | None <img width="500"/> | Yes <img width="500"/> |

### ITEM_HEIGHT

Height of one item of flatlist.

|           Type            |         Default         |        Required        |
| :-----------------------: | :---------------------: | :--------------------: |
| number <img width="500"/> | None <img width="500"/> | Yes <img width="500"/> |

### HOLD_TIME

Time after which item will become draggable.

|           Type            |        Default         |       Required        |
| :-----------------------: | :--------------------: | :-------------------: |
| number <img width="500"/> | 500 <img width="500"/> | No <img width="500"/> |

### listItemInfo

Provides information about flatlist like number of items, top and bottom index of items on screen.

|            Type             |        Default         |                           Signature                           |       Required        |
| :-------------------------: | :--------------------: | :-----------------------------------------------------------: | :-------------------: |
| function <img width="500"/> | None<img width="500"/> | ({bottomIndex, numOfItems, topIndex})=>void<img width="500"/> | No <img width="500"/> |
