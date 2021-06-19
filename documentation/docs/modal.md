---
id: modal
title: Modal
sidebar_label: Modal
---

Modal takes a children component and renders it inside a swipeable and scrollable modal box.

<div className="image-horizontal-preview">
    <figure>
      <img src="/frontatish/img/bottomPositionedModal.png" alt="Modal"  />
    </figure>
    <figure>
      <img src="/frontatish/img/centerPositionedModal.png" alt="Modal"  />
    </figure>
</div>

## Usage

```jsx
import { Modal, Button } from 'frontatish';

const [isOpen, setIsOpen] = useState(false);
const closeModal = () => {
  setIsOpen(false);
}
<Modal
  isOpen={isOpen}
  onBackButtonPress={closeModal}
  onSwipeComplete={closeModal}
>
    <View>
      <Text>Text in a modal box</Text>
    <View>
</Modal>
<Button label='Open Modal' onPress={() => {setIsOpen(true)}} />
```

## Props

### isOpen (required)

Determines whether the modal is opened or closed.

|            Type            |         Default         |        Required        |
| :------------------------: | :---------------------: | :--------------------: |
| boolean <img width="500"/> | None <img width="500"/> | Yes <img width="500"/> |

### children (required)

Content to be displayed inside the modal.

|             Type             |         Default         |        Required        |
| :--------------------------: | :---------------------: | :--------------------: |
| ReactNode <img width="500"/> | None <img width="500"/> | Yes <img width="500"/> |

### onBackButtonPress (required)

Function to be called when user press back button.

|            Type             |         Default         |        Required        |
| :-------------------------: | :---------------------: | :--------------------: |
| function <img width="500"/> | None <img width="500"/> | Yes <img width="500"/> |

### hasBackdrop

Determines whether the modal box has backdrop when opened or not.

|            Type            |         Default         |       Required        |
| :------------------------: | :---------------------: | :-------------------: |
| boolean <img width="500"/> | true <img width="500"/> | No <img width="500"/> |

### backdropOpacity

Defines the opacity of backdrop of modal.

|           Type            |        Default         |       Required        |
| :-----------------------: | :--------------------: | :-------------------: |
| number <img width="500"/> | 0.7 <img width="500"/> | No <img width="500"/> |

### swipeThreshold

Defines the swiping threshold after which modal will be closed.

|           Type            |        Default         |       Required        |
| :-----------------------: | :--------------------: | :-------------------: |
| number <img width="500"/> | 100 <img width="500"/> | No <img width="500"/> |

### swipeable

Determines whether the modal closes upon swiping down or not.

|            Type            |         Default         |       Required        |
| :------------------------: | :---------------------: | :-------------------: |
| boolean <img width="500"/> | true <img width="500"/> | No <img width="500"/> |

### componentStyle

A react native style object which takes care of styling the content inside modal. The modal view can be customized using this prop.

|             Type             |         Default         |       Required        |
| :--------------------------: | :---------------------: | :-------------------: |
| ViewStyle <img width="500"/> | None <img width="500"/> | No <img width="500"/> |

### centerPositioned

If centerPositioned is true then the modal displays itself at the center of the screen otherwise at the bottom of the screen.

|            Type            |         Default          |       Required        |
| :------------------------: | :----------------------: | :-------------------: |
| boolean <img width="500"/> | false <img width="500"/> | No <img width="500"/> |

### onSwipeComplete

Function to be called when user swipes down more than swipeThreshold.

|            Type             |         Default         |       Required        |
| :-------------------------: | :---------------------: | :-------------------: |
| function <img width="500"/> | None <img width="500"/> | No <img width="500"/> |

### onBackdropPress

Function to be called when user presses backdrop.

|            Type             |         Default         |       Required        |
| :-------------------------: | :---------------------: | :-------------------: |
| function <img width="500"/> | None <img width="500"/> | No <img width="500"/> |

### onCloseButtonPress

Function to be called when user presses close button.

|            Type             |         Default         |       Required        |
| :-------------------------: | :---------------------: | :-------------------: |
| function <img width="500"/> | None <img width="500"/> | No <img width="500"/> |
