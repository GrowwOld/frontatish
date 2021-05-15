---
id: dropdown
title: Dropdown
sidebar_label: Dropdown
---

Dropdown gives user an option to choose a value from list of values,and the list only visible when a user request for it by clicking on the dropdown.

<div className="image-horizontal-preview">
    <figure>
        <img src="/frontatish/img/dropdown.png" alt="NumberPad" height="250"/>
    </figure>
</div>

## Usage

```jsx
import { Dropdown } from 'frontatish';
const DropdownExample = () => {
  const items = [
    { value: 'AN', label: 'ANDAMAN & NICOBAR ISLANDS' },
    { value: 'AP', label: 'ANDHRA PRADESH' },
    { value: 'AR', label: 'ARUNACHAL PRADESH' },
    { value: 'AS', label: 'ASSAM' },
    { value: 'BH', label: 'BIHAR' },
  ];
  const [active, setActive] = useState(0);
  const onChange = (index: number) => {
    setActive(index);
  };
  return (
    <View style={{ flex: 1 }}>
      <Dropdown
        items={items}
        active={active}
        onChange={onChange}
        itemStyle={{
          fontWeight: '500',
        }}
      />
    </View>
  );
};
```

## Props

### items

list of options which you want to render inside the dropdown,each item will be a object with `value` and `label` as key as shown in the example above

|                        Type                        |        Default         |        Required        |
| :------------------------------------------------: | :--------------------: | :--------------------: |
| { value: string, label:string } <img width="500"/> | None<img width="500"/> | Yes <img width="500"/> |

### active

active index of item in the list, which will be control by your parent component's state,to keep changing the active value in the list on the basis of user choices

|            Type             |       Default       |        Required        |
| :-------------------------: | :-----------------: | :--------------------: |
| function <img width="500"/> | 0<img width="500"/> | Yes <img width="500"/> |

### onChange

a callback function which accept array index as an argument,that could be used to set your parent component's state. checkout the [usage](#usage) to better understand how to call this method.

|            Type             |        Default         |        Required        |
| :-------------------------: | :--------------------: | :--------------------: |
| function <img width="500"/> | None<img width="500"/> | Yes <img width="500"/> |

### activeItemStyle

TextStyle object to style your list item label

|             Type             |         Default         |       Required        |
| :--------------------------: | :---------------------: | :-------------------: |
| TextStyle <img width="500"/> | None <img width="500"/> | No <img width="500"/> |

### itemStyle

TextStyle object to style the text of input value same as [activeItemStyle](#activeItemStyle)
