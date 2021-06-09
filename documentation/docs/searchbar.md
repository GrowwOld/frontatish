---
id: searchbar
title: Searchbar
sidebar_label: Searchbar
---

Searchbar component allows user provides a text input to handle search. Using the props that are supported, things like icons to be used to go back and clear the text, callback function to handle the query etc can be customized.

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

<Button
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

### inputStyle

A react native style object which takes care of styling the text in the searchbar.

|             Type             |                                                               Default                                                                |       Required        |
| :--------------------------: | :----------------------------------------------------------------------------------------------------------------------------------: | :-------------------: |
| TextStyle <img width="500"/> | `{flex: 4, paddingHorizontal: 5, paddingVertical: 0, fontSize: Fonts.size.regular_17, color: useColors().font_1}` <img width="500"/> | No <img width="500"/> |

### onBackIconPress

Function to be called when the back icon is pressed. There will not be any function by default as the component will not be aware of the navigation.

|            Type             |         Default         |       Required        |
| :-------------------------: | :---------------------: | :-------------------: |
| function <img width="500"/> | None <img width="500"/> | No <img width="500"/> |

### onChangeText

function to use the text entered into the searchbar. This is the search logic.

|            Type             |         Default         |       Required        |
| :-------------------------: | :---------------------: | :-------------------: |
| function <img width="500"/> | None <img width="500"/> | No <img width="500"/> |

### onClearIconPress

Function to be called when the clear icon is pressed.

|            Type             |                Default                |       Required        |
| :-------------------------: | :-----------------------------------: | :-------------------: |
| function <img width="500"/> | `onChangeText('')` <img width="500"/> | No <img width="500"/> |

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

Value to show in the searchbar. This field is needed to use the value entered by the user and apply search logic.

|           Type            |           Default            |       Required        |
| :-----------------------: | :--------------------------: | :-------------------: |
| string <img width="500"/> | user input<img width="500"/> | No <img width="500"/> |
