---
id: dropdown
title: Dropdown
sidebar_label: Dropdown
---

Dropdown gives user an option to choose a value from list of values,and the list only visible when a user request for it by clicking on the dropdown.

<div className="image-horizontal-preview">
    <figure>
        <img src="/super/img/dropdown.png" alt="NumberPad" height="250"/>
    </figure>
</div>

```jsx
import { Dropdown } from 'viserion';
const DropdownExample = () => {
  const Colors = useColors();
  const items = ['ITEM-A', 'ITEM-B', 'ITEM-C', 'ITEM-D'];
  const [active, setActive] = useState(0);
  const onChange = (index: number) => {
    setActive(index);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.white,
        // justifyContent: 'center',
      }}
    >
      <Dropdown dropItems={items} active={active} onChange={onChange} />
    </SafeAreaView>
  );
};
```
