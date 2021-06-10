---
id: searchbar_entry
title: SearchbarEntry
sidebar_label: SearchbarEntry
---

SearchbarEntry component provides an entry into the searchbar screen on press.

<div className="image-horizontal-preview">
    <figure>
      <img src="/frontatish/img/searchbarentry.png" alt="SearchbarEntry" />
    </figure>
    <figure>
      <img src="/frontatish/img/searchbarentry_dark.png" alt="dark SearchbarEntry" />
    </figure>
</div>

## Usage

```jsx
// react base imports
import { useNavigation } from '@react-navigation/native';
import { SearchbarEntry } from 'frontatish';

const navigation = useNavigation();

<SearchbarEntry
  value="Search Groww"
  leftLogo={require('/path/to/img/img_name')}
  rightIcon="account-circle"
  onPress={navigation.navigate('SearchbarScreen')}
/>;
```

## Props

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

### leftIcon

Name of the icon to be showed which appears on the left end. Only icons from **react-native-vector-icons/MaterialIcons** are supported.

|           Type            |         Default         |       Required        |
| :-----------------------: | :---------------------: | :-------------------: |
| string <img width="500"/> | null <img width="500"/> | No <img width="500"/> |

### leftLogo

Logo to be displayed at the left end. **Logos have higher precedence than icons** i.e., if both leftIcon and leftLogo are passed, only leftLogo is rendered in the left end.

|                  Type                  |         Default         |       Required        |
| :------------------------------------: | :---------------------: | :-------------------: |
| ImageSourcePropType <img width="500"/> | null <img width="500"/> | No <img width="500"/> |

### onLeftIconPress

Function to be called when the left icon is pressed.

|            Type             |         Default         |       Required        |
| :-------------------------: | :---------------------: | :-------------------: |
| function <img width="500"/> | None <img width="500"/> | No <img width="500"/> |

### onLeftLogoPress

Function to be called when the left logo is pressed.

|            Type             |         Default         |       Required        |
| :-------------------------: | :---------------------: | :-------------------: |
| function <img width="500"/> | None <img width="500"/> | No <img width="500"/> |

### onPress

Function to be called when the searchbar is pressed. This should be mainly used to navigate to the search screen which will have the `Searchbar` component.

|            Type             |         Default         |       Required        |
| :-------------------------: | :---------------------: | :-------------------: |
| function <img width="500"/> | None <img width="500"/> | No <img width="500"/> |

### onRightIconPress

Function to be called when the right icon is pressed.

|            Type             |         Default         |       Required        |
| :-------------------------: | :---------------------: | :-------------------: |
| function <img width="500"/> | None <img width="500"/> | No <img width="500"/> |

### onRightLogoPress

Function to be called when the right logo is pressed.

|            Type             |         Default         |       Required        |
| :-------------------------: | :---------------------: | :-------------------: |
| function <img width="500"/> | None <img width="500"/> | No <img width="500"/> |

### rightIcon

Name of the icon to be showed which appears on the right end. Only icons from **react-native-vector-icons/MaterialIcons** are supported.

|           Type            |         Default         |       Required        |
| :-----------------------: | :---------------------: | :-------------------: |
| string <img width="500"/> | null <img width="500"/> | No <img width="500"/> |

### rightLogo

Logo to be displayed at the right end. **Logos have higher precedence than icons** i.e., if both rightIcon and rightLogo are passed, only rightLogo is rendered in the right end.

|                  Type                  |         Default         |       Required        |
| :------------------------------------: | :---------------------: | :-------------------: |
| ImageSourcePropType <img width="500"/> | null <img width="500"/> | No <img width="500"/> |

### value

Value to show in the searchbar.

|           Type            |          Default           |       Required        |
| :-----------------------: | :------------------------: | :-------------------: |
| string <img width="500"/> | 'Search'<img width="500"/> | No <img width="500"/> |
