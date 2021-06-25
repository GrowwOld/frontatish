---
id: codeinput
title: CodeInput
sidebar_label: CodeInput
---

Numpad is custom designed keypad for handling number inputs.

<div className="image-horizontal-preview">
    <figure>
        <img src="/frontatish/img/code-light.png" alt="NumberPad" />
    </figure>
    <figure>
        <img src="/frontatish/img/code-dark.png" alt="NumberPad" />
    </figure>
</div>

## Usage

```jsx
import { NumPad, CodeInput } from 'frontatish';

class NumPadExample extends Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
  }

  // onItemKeyClick
  onItemKeyClick = (keyStroke?: keyStrokeType) => {
    this.setState({ keyStroke, codeError: '' });
  };

  setCode = (value: string) => {
    // once everythis is entered
    this.setState({ value });
  };

  onSubmit = () => {
    const { value } = this.state;
    if (value.length < this.codeLength) {
      this.setState({ codeError: 'Incorrect Code' });
    }
    if (value.length === this.codeLength) {
      this.setState({ codeError: '' });
    }
  };

  render() {
    const { input } = this.state;
    return (
          <CodeInput
            keyStroke={keyStroke!}
            codeLength={this.codeLength}
            inputContainer="line"
            setCode={this.setCode}
            value="1247"
            codeError={codeError}
            errorTextStyle={{ textAlign: 'center' }}
            codeTextStyle={{ color: Colors.font_1 }}
          />
        <NumPad onItemKeyClick={this.onItemKeyClick} onSubmit={this.onSubmit} />
    );
  }
}
```

## Props

### value

A parent state variable to control the code input current value

> This is the value which is you actually codebox contains

|           Type            |        Default         |        Required        |
| :-----------------------: | :--------------------: | :--------------------: |
| string <img width="500"/> | none<img width="500"/> | Yes <img width="500"/> |

### codeLength

Length of your code to display number of boxes

|           Type            |       Default       |       Required        |
| :-----------------------: | :-----------------: | :-------------------: |
| number <img width="500"/> | 6<img width="500"/> | No <img width="500"/> |

### setCode

Callback function to set the value of the code in your parent state

|            Type             |        Default         |        Required        |
| :-------------------------: | :--------------------: | :--------------------: |
| function <img width="500"/> | none<img width="500"/> | Yes <img width="500"/> |

### keyStroke

### codeError

Error message you want to show users,whenever error occurs

|           Type            |        Default         |       Required        |
| :-----------------------: | :--------------------: | :-------------------: |
| string <img width="500"/> | none<img width="500"/> | No <img width="500"/> |

### Mask

If you want to mask the values in UI you can pass your desired mask component to it

|                Type                |        Default         |       Required        |
| :--------------------------------: | :--------------------: | :-------------------: |
| React.Component <img width="500"/> | none<img width="500"/> | No <img width="500"/> |

### errorAnimation

Currently if error is passed the codeinput shakes to acknowledge for error,you can disabled it through this props.

|            Type            |        Default         |       Required        |
| :------------------------: | :--------------------: | :-------------------: |
| boolean <img width="500"/> | true<img width="500"/> | No <img width="500"/> |

### errorTextStyle

To control the error text style

|             Type             |        Default         |       Required        |
| :--------------------------: | :--------------------: | :-------------------: |
| TextStyle <img width="500"/> | None<img width="500"/> | No <img width="500"/> |

### codeTextStyle

To control code text style

|            Type            |        Default         |       Required        |
| :------------------------: | :--------------------: | :-------------------: |
| boolean <img width="500"/> | None<img width="500"/> | No <img width="500"/> |
