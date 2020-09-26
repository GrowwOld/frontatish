---
id: table
title: Table
sidebar_label: Table
---

Table is used to display the data in tabular format with optional toggle feature in the right hand side to toggle between the values if you want to show more than two columns,so that you don't need to make it horizontal scrollable due to lack of space

<div className="image-horizontal-preview">
    <figure>
      <img src="/frontatish/img/table.png" alt="checkbox" width="300"/>
    </figure>
</div>

## Usage

```jsx

import { Table } from 'frontatish';

// key should be exactly the same as option keys
// so that it can be correctly mapped
const customRightItemComponents = { marketPrice: <View />};
return (
  <View style={{ flex: 1, marginHorizontal: 20 }}>
    <Text style={[Fonts.style.h4, { color: Colors.BLACK }]}>
      Table Example
    </Text>
    <Table
      data={[array of objects]}
      title="Name"
      option={['marketPrice', 'holding', 'industryName']}
      optionLabel={['Market Price', 'Holding', 'Sector']}
      leftKey="companyName"
      flatlistKey="isin"
      customRightItemComponents={customRightItemComponents}
    />
  </View>
);
};

```

## Props

### data

An array of objects which contents all the info that needed to be displayed

|             Type             |        Default         |        Required        |
| :--------------------------: | :--------------------: | :--------------------: |
| objects[] <img width="500"/> | none<img width="500"/> | Yes <img width="500"/> |

### leftKey

The key from data object(single item from the data array) which you want to display in the left side of the table.

|           Type            |        Default         |        Required        |
| :-----------------------: | :--------------------: | :--------------------: |
| string <img width="500"/> | none<img width="500"/> | Yes <img width="500"/> |

### customLeftItemComponents

You can override the left item's ui by passing a custom component in an object whose `key` must be equal to the `leftKey`, so that it can get correctly mapped in the ui

|           Type            |        Default         |        Required        |
| :-----------------------: | :--------------------: | :--------------------: |
| object <img width="500"/> | none<img width="500"/> | Yes <img width="500"/> |

### title

Title of the table which appears on the top left of the table

### option

Option is a single string or array of string,that string should exactly be same as `key` of that data object,which you want to display in the table,so be careful and cross check the `dto` before you pass the option.

|                 Type                  |        Default         |        Required        |
| :-----------------------------------: | :--------------------: | :--------------------: |
| string or string[] <img width="500"/> | none<img width="500"/> | Yes <img width="500"/> |

### customRightItemComponents

You can override the right item's ui by passing a custom component in an object whose `key` must be one of the option key which has been passed in `option`, so that it can get correctly mapped in the ui, for better clarity you can checkout the example above. or [go through this example](https://github.com/Groww/super/blob/master/src/examples/TableExample.tsx)

|           Type            |        Default         |        Required        |
| :-----------------------: | :--------------------: | :--------------------: |
| object <img width="500"/> | none<img width="500"/> | Yes <img width="500"/> |

### optionLabel

Option label is the label for `option key` you provided in `option` props to show the label in the ui,if you will not provide it,it will show option as a label in the top right side of the table. if your `option` props is array of strings then make sure you should pass the `optionLabel` array in same order as `option` props.

|                 Type                  |        Default         |       Required        |
| :-----------------------------------: | :--------------------: | :-------------------: |
| string or string[] <img width="500"/> | none<img width="500"/> | No <img width="500"/> |

### flatlistkey

This is the key from your data object to set the `key` parameter in Table component,since we are looping in the array to get a single data object

|           Type            |        Default         |        Required        |
| :-----------------------: | :--------------------: | :--------------------: |
| string <img width="500"/> | none<img width="500"/> | Yes <img width="500"/> |

### leftItemContainerStyle

To give the custom style to the container of the left item in the table

|             Type             |        Default         |       Required        |
| :--------------------------: | :--------------------: | :-------------------: |
| ViewStyle <img width="500"/> | none<img width="500"/> | No <img width="500"/> |

### leftKeyOnPress

Callback function to be called once user clicks on left item in the table

|            Type             |        Default         |       Required        |
| :-------------------------: | :--------------------: | :-------------------: |
| function <img width="500"/> | none<img width="500"/> | No <img width="500"/> |

### rightItemContainerStyle

To give the custom style to the container of the left item in the table

|             Type             |        Default         |       Required        |
| :--------------------------: | :--------------------: | :-------------------: |
| ViewStyle <img width="500"/> | none<img width="500"/> | No <img width="500"/> |

### rightKeyOnPress

Callback function to be called once user clicks on left item in the table

|            Type             |        Default         |       Required        |
| :-------------------------: | :--------------------: | :-------------------: |
| function <img width="500"/> | none<img width="500"/> | No <img width="500"/> |
