---
id: button
title: Button
sidebar_label: Button
---

Button components helps to handle all user actions using onPress handlers, the button component has some types defined inside it which display various form of buttons on the basis of that,any time you can customize it by passing the custom styles. On the lower level it uses [react-native-material-ripple](https://www.npmjs.com/package/react-native-material-ripple)

<div className="image-horizontal-preview">
    <figure>
      <img src="/super/img/primary-button.png" alt="primary-button" />
    </figure>
    <figure>
      <img src="/super/img/secondary-button.png" alt="secondary-button" />
    </figure>
    <figure>
      <img src="/super/img/default-button.png" alt="default-button" />
    </figure>
    <figure>
      <img src="/super/img/disabled-button.png" alt="disabled-button" />
    </figure>
</div>

## Usage

```jsx
// react base imports

import { Button } from 'supergroww';

// primary button
<Button
  type="primary"
  label="primary button"
  onPress={() => console.log('Pressed')}
/>

// secondary button
<Button
  label="secondary button"
  type="primary"
  onPress={() => console.log('Pressed')}
/>

```

## Props

### `onPress`

Function to be called when user taps on the button

|        Type         |    Default     | Required|
| :-----------------: | :------------: | :------------:
| function <img width="500"/> | None<img width="500"/>| Yes <img width="500"/>

---

### `label`

Label to display inside the button

|        Type         |    Default     | Required|
| :-----------------: | :------------: | :------------:
| string <img width="500"/> | None <img width="500"/>| Yes <img width="500"/>


---

### `type`

On the basis of **type** passed to component, it applies the defined style to it

|        Type         |    Default     |     Values     | Required|
| :-----------------: | :------------: | :------------:   | :------------:
| string <img width="500"/> | **primary** <img width="500"/> |  oneOf(primary, secondary, default) <img width="500"/> | No <img width="500"/>


---

### `loading`

loading ensures that user see some indicator while some action is getting done,it also disables onPress when loading is true so that function call can be atomic.

|        Type         |    Default     | Required|
| :-----------------: | :------------: | :------------:
| boolean <img width="500"/> | false <img width="500"/>| No <img width="500"/>

---

### `disabled`

disabled make sure if its true then user won't be able to click it and the onPress would not get called

|        Type         |    Default     | Required
| :-----------------: | :------------: | :------------:
| boolean <img width="500"/> | false <img width="500"/>| No <img width="500"/>


### `customStyles`

A react native style object which takes care of styling the button component as per your needs

|        Type         |    Default     | Required
| :-----------------: | :------------: | :------------:
| ViewStyle <img width="500"/> | none <img width="500"/>| No <img width="500"/>

