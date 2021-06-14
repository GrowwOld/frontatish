---
id: searchbar
title: Searchbar
sidebar_label: Searchbar
---

Searchbar component. When `editable` is set as `false`, the searchbar acts similar to a button and the `onPress` should contain the navigation to the seach screen. The screen screen should pass `editable` as `true` and the `onChangeText` function can use the `value` prop for the search logic. Various props are provided for customization, icons, logos and functionalities.

<div className="image-horizontal-preview">
    <figure>
      <img src="/frontatish/img/searchbar_1.png" alt="search bar with no input" />
    </figure>
    <figure>
      <img src="/frontatish/img/searchbar_2.png" alt="searchbar with input" />
    </figure>
    <figure>
      <img src="/frontatish/img/searchbar_dark_1.png" alt="dark searchbar" />
    </figure>
    <figure>
      <img src="/frontatish/img/searchbar_dark_2.png" alt="dark searchbar with input" />
    </figure>
</div>

## Usage

```jsx
// react base imports
import { useNavigation } from '@react-navigation/native';
import { Searchbar } from 'frontatish';

const [query, setQuery] = useState('');
const onChangeText = (text) => {
  // search logic
};
const navigation = useNavigation();

<Searchbar
  value={query}
  onChangeText={onChangeText}
  backIcon="arrow-back"
  onBackIconPress={navigation.goBack}
/>;
```

## Props

### autoFocus

If `true` focuses the searchbar when the component is mounted.

|            Type            |         Default         |       Required        |
| :------------------------: | :---------------------: | :-------------------: |
| boolean <img width="500"/> | true <img width="500"/> | No <img width="500"/> |

### backIcon

Name of the icon to be showed which appears on the left end of the searchbar to go to the previous screen. Only icons from **react-native-vector-icons/MaterialIcons** are supported.

|           Type            |             Default             |       Required        |
| :-----------------------: | :-----------------------------: | :-------------------: |
| string <img width="500"/> | 'arrow-back' <img width="500"/> | No <img width="500"/> |

### clearIcon

Name of the icon to be showed which appears on the right end of the searchbar to clear the text. Only icons from **react-native-vector-icons/MaterialIcons** are supported.

|           Type            |          Default           |       Required        |
| :-----------------------: | :------------------------: | :-------------------: |
| string <img width="500"/> | 'clear' <img width="500"/> | No <img width="500"/> |

### containerStyle

A react native style object which takes care of styling the container around the search input.

|             Type             |                                                                            Default                                                                             |       Required        |
| :--------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------: |
| ViewStyle <img width="500"/> | `{flexDirection: 'row', padding: 12, backgroundColor: useColors().white, borderRadius: 39, borderWidth: 1, borderColor:useColors().font_4,}`<img width="500"/> | No <img width="500"/> |

### editable

boolean value to determine if the searchbar is editable or not. If `editable` is `false`, the searchbar acts like an entry to the search screen. The `onPress` prop must provide navigation to the search screen that will use `Searchbar` with `editable` set as `true`. When `editable` is `true`, the searchbar can be used like `TextInput` for the search logic.

|            Type            |         Default         |       Required        |
| :------------------------: | :---------------------: | :-------------------: |
| boolean <img width="500"/> | None <img width="500"/> | No <img width="500"/> |

### inputStyle

A react native style object which takes care of styling the text in the searchbar.

|             Type             |                                                               Default                                                                |       Required        |
| :--------------------------: | :----------------------------------------------------------------------------------------------------------------------------------: | :-------------------: |
| TextStyle <img width="500"/> | `{flex: 4, paddingHorizontal: 5, paddingVertical: 0, fontSize: Fonts.size.regular_17, color: useColors().font_1}` <img width="500"/> | No <img width="500"/> |

### leftIcon

Name of the icon to be showed which appears in the left end of the searchbar. Only icons from **react-native-vector-icons/MaterialIcons** are supported.
Note : If `editable` is `true` and `showBackIcon` is `true`, **only the `backIcon` will be rendered in the left end**.

|           Type            |         Default         |       Required        |
| :-----------------------: | :---------------------: | :-------------------: |
| string <img width="500"/> | null <img width="500"/> | No <img width="500"/> |

### leftLogo

Logo to be displayed at the left end. **leftLogo has higher precedence than leftIcon** i.e., if both leftIcon and leftLogo are passed, only leftLogo is rendered in the left end (if `editable` is `false`).

|                  Type                  |         Default         |       Required        |
| :------------------------------------: | :---------------------: | :-------------------: |
| ImageSourcePropType <img width="500"/> | null <img width="500"/> | No <img width="500"/> |

### onBackIconPress

Function to be called when the back icon is pressed. There will not be any function by default as the component will not be aware of the navigation.

|            Type             |         Default         |       Required        |
| :-------------------------: | :---------------------: | :-------------------: |
| function <img width="500"/> | None <img width="500"/> | No <img width="500"/> |

### onChangeText

Function to use the text entered into the searchbar. This is the search logic.

|            Type             |         Default         |       Required        |
| :-------------------------: | :---------------------: | :-------------------: |
| function <img width="500"/> | None <img width="500"/> | No <img width="500"/> |

### onClearIconPress

Function to be called when the clear icon is pressed.

|            Type             |                Default                |       Required        |
| :-------------------------: | :-----------------------------------: | :-------------------: |
| function <img width="500"/> | `onChangeText('')` <img width="500"/> | No <img width="500"/> |

### onLeftIconPress

Function to be called when the left icon is pressed.

|            Type             |           Default            |       Required        |
| :-------------------------: | :--------------------------: | :-------------------: |
| function <img width="500"/> | `onPress` <img width="500"/> | No <img width="500"/> |

### onLeftLogoPress

Function to be called when the left logo is pressed.

|            Type             |           Default            |       Required        |
| :-------------------------: | :--------------------------: | :-------------------: |
| function <img width="500"/> | `onPress` <img width="500"/> | No <img width="500"/> |

### onRightIconPress

Function to be called when the right icon is pressed.

|            Type             |           Default            |       Required        |
| :-------------------------: | :--------------------------: | :-------------------: |
| function <img width="500"/> | `onPress` <img width="500"/> | No <img width="500"/> |

### onRightLogoPress

Function to be called when the right logo is pressed.

|            Type             |           Default            |       Required        |
| :-------------------------: | :--------------------------: | :-------------------: |
| function <img width="500"/> | `onPress` <img width="500"/> | No <img width="500"/> |

### onPress

Function to be called when the searchbar with `editable` set as `false` is pressed. This should be mainly used to navigate to the search screen which will have the `Searchbar` component with `editable` set as `true`.

|            Type             |         Default         |       Required        |
| :-------------------------: | :---------------------: | :-------------------: |
| function <img width="500"/> | null <img width="500"/> | No <img width="500"/> |

### placeholder

Text for placeholder

|           Type            |          Default           |       Required        |
| :-----------------------: | :------------------------: | :-------------------: |
| string <img width="500"/> | 'Search'<img width="500"/> | No <img width="500"/> |

### placeholderTextColor

Color of placeholder

|           Type            |                Default                |       Required        |
| :-----------------------: | :-----------------------------------: | :-------------------: |
| string <img width="500"/> | useColors().font_3 <img width="500"/> | No <img width="500"/> |

### rightIcon

Name of the icon to be showed which appears in the right end of the searchbar. Only icons from **react-native-vector-icons/MaterialIcons** are supported.
Note : If `editable` is `true` and `showClearIcon` is `true`, **only the `clearIcon` will be rendered in the right end**.

|           Type            |         Default         |       Required        |
| :-----------------------: | :---------------------: | :-------------------: |
| string <img width="500"/> | null <img width="500"/> | No <img width="500"/> |

### rightLogo

Logo to be displayed at the right end. **rightLogo has higher precedence than rightIcon** i.e., if both rightIcon and rightLogo are passed, only rightLogo is rendered in the right end (if `editable` is `false`).

|                  Type                  |         Default         |       Required        |
| :------------------------------------: | :---------------------: | :-------------------: |
| ImageSourcePropType <img width="500"/> | null <img width="500"/> | No <img width="500"/> |

### selectionColor

Color of the cursor when `editable` is `true`.

|           Type            |               Default               |       Required        |
| :-----------------------: | :---------------------------------: | :-------------------: |
| string <img width="500"/> | `Colors.primary` <img width="500"/> | No <img width="500"/> |

### showBackIcon

If `true`, `backIcon` will be rendered.

|            Type            |         Default         |       Required        |
| :------------------------: | :---------------------: | :-------------------: |
| boolean <img width="500"/> | true <img width="500"/> | No <img width="500"/> |

### showClearIcon

If `true`, `clearIcon` will be rendered.

|            Type            |         Default         |       Required        |
| :------------------------: | :---------------------: | :-------------------: |
| boolean <img width="500"/> | true <img width="500"/> | No <img width="500"/> |

### value

Value to show in the searchbar. When `editable` is `true`, this prop is used for the search logic and for the text to be displayed in the searchbar.

|           Type            |           Default            |       Required        |
| :-----------------------: | :--------------------------: | :-------------------: |
| string <img width="500"/> | user input<img width="500"/> | No <img width="500"/> |
