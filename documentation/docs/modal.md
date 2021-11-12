---
id: modal
title: Modal
sidebar_label: Modal
---

A Modal component that will popup in front of your screen. It can be swiped up to full height or swiped down to close.

<div className="image-horizontal-preview">
    <figure>
      <img src="/frontatish/img/topModal.gif" alt="top-modal" height="400" width="400" />
    </figure>
     <figure>
      <img src="/frontatish/img/centerModal.gif" alt="center-modal" height="400" width="400" />
    </figure>
     <figure>
      <img src="/frontatish/img/bottomModal.gif" alt="bottom-modal" height="400" width="400" />
    </figure>
</div>

## Usage

```jsx

import { Modal } from 'frontatish';

<Modal
  open={open}
  onModalClose={close}
  contentHeight={400}
  swipeThreshold={100}
  position="top"
  entryDirection="up"
  onBackdropPressClose
  onBackButtonPressClose
  hasCloseButton
  swipeable
>

```

## Props

### open

Modal will show based on the value of open.

|            Type            |         Default         |        Required        |
| :------------------------: | :---------------------: | :--------------------: |
| boolean <img width="500"/> | None <img width="500"/> | Yes <img width="500"/> |

### onModalOpen

Function to be called when modal shows on screen.

|            Type             |        Default         |       Required        |
| :-------------------------: | :--------------------: | :-------------------: |
| function <img width="500"/> | None<img width="500"/> | No <img width="500"/> |

### onModalClose

Function to be called when user closes the modal. Set open to false here.

|            Type             |        Default         |        Required        |
| :-------------------------: | :--------------------: | :--------------------: |
| function <img width="500"/> | None<img width="500"/> | Yes <img width="500"/> |

### children

Content to display inside modal.

|             Type             |         Default         |        Required        |
| :--------------------------: | :---------------------: | :--------------------: |
| ReactNode <img width="500"/> | None <img width="500"/> | Yes <img width="500"/> |

### contentHeight

Height of the modal box.

|           Type            |                Default                 |       Required        |
| :-----------------------: | :------------------------------------: | :-------------------: |
| number <img width="500"/> | Device Height \*3/4 <img width="500"/> | No <img width="500"/> |

### animationInTiming

Time for modal to completely open on the screen.

|           Type            |        Default         |       Required        |
| :-----------------------: | :--------------------: | :-------------------: |
| number <img width="500"/> | 700 <img width="500"/> | No <img width="500"/> |

### animationOutTiming

Time for modal to completely close off the screen.

|           Type            |        Default         |       Required        |
| :-----------------------: | :--------------------: | :-------------------: |
| number <img width="500"/> | 700 <img width="500"/> | No <img width="500"/> |

### position

determines position of modal on screen.

|           Type            |            Default            |                   Values                   |       Required        |
| :-----------------------: | :---------------------------: | :----------------------------------------: | :-------------------: |
| string <img width="500"/> | **bottom** <img width="500"/> | top or center or bottom <img width="500"/> | No <img width="500"/> |

### entryDirection

determines direction of entry of modal on screen.

|           Type            |           Default           |                     Values                     |       Required        |
| :-----------------------: | :-------------------------: | :--------------------------------------------: | :-------------------: |
| string <img width="500"/> | **down** <img width="500"/> | up or down or left or right <img width="500"/> | No <img width="500"/> |

### exitDirection

determines direction of exit of modal on screen.

|           Type            |           Default           |                     Values                     |       Required        |
| :-----------------------: | :-------------------------: | :--------------------------------------------: | :-------------------: |
| string <img width="500"/> | **down** <img width="500"/> | up or down or left or right <img width="500"/> | No <img width="500"/> |

### swipeable

determines whether modal is swipeable.

|            Type            |         Default          |       Required        |
| :------------------------: | :----------------------: | :-------------------: |
| boolean <img width="500"/> | false <img width="500"/> | No <img width="500"/> |

### swipeThreshold

Threshold above which modal will be swipeable.

|           Type            |        Default         |       Required        |
| :-----------------------: | :--------------------: | :-------------------: |
| number <img width="500"/> | 100 <img width="500"/> | No <img width="500"/> |

### hasCloseButton

determines whether modal has a close button.

|            Type            |         Default          |       Required        |
| :------------------------: | :----------------------: | :-------------------: |
| boolean <img width="500"/> | false <img width="500"/> | No <img width="500"/> |

### closeButtonStyle

A react native style object which takes care of styling the close button of modal.

|             Type             |         Default         |       Required        |
| :--------------------------: | :---------------------: | :-------------------: |
| ViewStyle <img width="500"/> | none <img width="500"/> | No <img width="500"/> |

### style

A react native style object which takes care of styling the modal.

|             Type             |         Default         |       Required        |
| :--------------------------: | :---------------------: | :-------------------: |
| ViewStyle <img width="500"/> | none <img width="500"/> | No <img width="500"/> |

### hasBackdrop

determines whether modal has a backdrop.

|            Type            |         Default         |       Required        |
| :------------------------: | :---------------------: | :-------------------: |
| boolean <img width="500"/> | true <img width="500"/> | No <img width="500"/> |

### backdropColor

determines the color of backdrop.

|           Type            |          Default           |       Required        |
| :-----------------------: | :------------------------: | :-------------------: |
| string <img width="500"/> | 'black' <img width="500"/> | No <img width="500"/> |

### backdropOpacity

determines the opacity of backdrop.

|           Type            |        Default         |       Required        |
| :-----------------------: | :--------------------: | :-------------------: |
| number <img width="500"/> | 0.7 <img width="500"/> | No <img width="500"/> |

### onBackdropPressClose

determines whether modal closes on pressing backdrop.

|            Type            |         Default          |       Required        |
| :------------------------: | :----------------------: | :-------------------: |
| boolean <img width="500"/> | false <img width="500"/> | No <img width="500"/> |

### onBackButtonPressClose

determines whether modal closes on pressing back button.

|            Type            |         Default          |       Required        |
| :------------------------: | :----------------------: | :-------------------: |
| boolean <img width="500"/> | false <img width="500"/> | No <img width="500"/> |
