---
id: numpad
title: NumPad
sidebar_label: NumPad
---

Numpad is custom designed keypad for handling number inputs,it rely on [react-native-material-ripple](https://www.npmjs.com/package/react-native-material-ripple),to have ripple effect on every number press.

<div className="image-horizontal-preview">
    <figure>
        <img src="/frontatish/img/numpad.png" alt="NumberPad" height="250"/>
    </figure>
    <figure>
        <img src="/frontatish/img/numpad_2.png" alt="NumberPad" height="250"/>
    </figure>
</div>

## Usage

```jsx
import { NumPad } from 'frontatish';

class NumPadExample extends Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
  }

  onItemClick = (value) => {
    const { input } = this.state;
    if (input.length < 10) {
      this.setState({ input: input + value });
    }
  };

  onDeleteItem = () => {
    const { input } = this.state;
    this.setState({ input: input.substring(0, input.length - 1) });
  };

  render() {
    const { input } = this.state;
    return (
      <NumPad onItemClick={this.onItemClick} onDeleteItem={this.onDeleteItem} />
    );
  }
}
```

## Props

### onItemClick

Callback function which gets called on every item press in number pad,you can see the usage to understand better
it will basically append the the value you will press, eventually in the parent state.

|            Type             |        Default         |        Required        |
| :-------------------------: | :--------------------: | :--------------------: |
| function <img width="500"/> | none<img width="500"/> | Yes <img width="500"/> |

### onDeleteItem

Callback function which gets called on delete icon press,you can see the usage to understand better
it will basically delete the the last item from the current value.

|            Type             |        Default         |        Required        |
| :-------------------------: | :--------------------: | :--------------------: |
| function <img width="500"/> | none<img width="500"/> | Yes <img width="500"/> |

### onItemKeyClick

Callback function which gets called if passed and with these argument `keyStroke` which is of type `keyStrokeType`.

|            Type             |        Default         |        Required        |
| :-------------------------: | :--------------------: | :--------------------: |
| function <img width="500"/> | none<img width="500"/> | Yes <img width="500"/> |

> keyStrokeType `{ actionType:'insert' | 'delete' ,actionId: number,value: string }`

keyStrokeType can help you to build more customizable components with it. for example to make use of [CodeInput](codeinput) along with the NumPad component this method will help you to use both of them together seamlessly

### onSubmit

Callback function which gets called on pressing submit button in the keypad

|            Type             |        Default         |        Required        |
| :-------------------------: | :--------------------: | :--------------------: |
| function <img width="500"/> | none<img width="500"/> | Yes <img width="500"/> |
