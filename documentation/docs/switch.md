---
id: switch
title: Switch
sidebar_label: Switch
---

Switch component gives an option to the user to toggle between two option to either pick one of the value base the switch value,this can be helpful when you are giving the user an option to choose between any two option.

<div className="image-horizontal-preview">
    <figure>
        <img src="/viserion/img/switch.png" alt="NumberPad" height="50"/>
    </figure>
    <figure>
        <img src="/viserion/img/switch_2.png" alt="NumberPad" height="50"/>
    </figure>
</div>

## Usage

```jsx
<Switch
  isOn={isOn}
  onColor="#00D09C"
  offColor="#E6E7E8"
  // label="Example label"
  // size="small"
  onToggle={onThemeSwitch}
/>
```

## Props

### isOn

### onColor

### offColor

### onToggle

### size

### icon

You can pass custom icon for switch to make the ui more impressive,like if you are having light mode and dark mode then you can pass sunlight and moonlight icon into switch to make you switch to look much more good.

### disabled

### trackOffStyle

### trackOnStyle

### thumbOnStyle

### thumbOffStyle
