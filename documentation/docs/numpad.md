---
id: numpad
title: NumPad
sidebar_label: NumPad
---

Numpad is custom designed keypad for handling number inputs,it rely on [react-native-material-ripple](https://www.npmjs.com/package/react-native-material-ripple),to have ripple effect on every number press.

<div>
    <figure>
        <img src="/super/img/numpad.png" alt="NumberPad" height="250"/>
    </figure>
</div>


## Usage
```jsx
import { NumPad } from 'growwsuper/components';

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
    const { isDark } = this.props;
    return (
      <View>
        <NumPad
          onItemClick={this.onItemClick}
          onDeleteItem={this.onDeleteItem}
          isDark={isDark}
        />
      </View>
    );
  }
}
```

## Props

### `onItemClick`

Callback function which gets called on every item press in number pad,you can see the usage to understand better
it will basically append the the value you will press, eventually in the parent state.

|            Type             |        Default         |        Required        |
| :-------------------------: | :--------------------: | :--------------------: |
| function <img width="500"/> | none<img width="500"/> | Yes <img width="500"/> |

---

### `onDeleteItem`

Callback function which gets called on delete icon press,you can see the usage to understand better
it will basically delete the the last item from the current value.

|            Type             |        Default         |        Required        |
| :-------------------------: | :--------------------: | :--------------------: |
| function <img width="500"/> | none<img width="500"/> | Yes <img width="500"/> |

---

### `isDark`

This flags helps us to handle colors for dark mode changes in the component,if the parent component support theming then this will be useful to handle color visibilty in the dark mode as well.(*we might update this attribute to something else to handle theme in a better way*)

|           Type            |         Default         |        Required        |
| :-----------------------: | :---------------------: | :--------------------: |
| boolean <img width="500"/> | false <img width="500"/> | No <img width="500"/> |
