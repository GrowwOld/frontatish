---
id: calendar
title: Calendar
sidebar_label: Calendar
---

<div className="image-horizontal-preview">
    <figure>
      <img src="/frontatish/img/day.png" alt="dayPicker" />
    </figure>
    <figure>
      <img src="/frontatish/img/dayMonth.png" alt="dayMonthPicker" />
    </figure>
    <figure>
      <img src="/frontatish/img/monthYear.png" alt="monthYearPicker" />
    </figure>
</div>

## Usage

```jsx
// react base imports

import { Calendar } from 'frontatish';

// day picker
<Button
  type="D"
  setDate={setDate}
  defaultDate={date}
/>

// day-month picker
<Button
  label="D/M"
  setDate={setDate}
  defaultDate={date}
/>

// month-year picker
<Button
  label="M/Y"
  setDate={setDate}
  defaultDate={date}
/>

```

## Props

### OnPressDone

Function to be called when user taps on 'Done' button. You should pass a function to update the value of date in this.

|            Type             |        Default         |                                              Signature                                              |        Required        |
| :-------------------------: | :--------------------: | :-------------------------------------------------------------------------------------------------: | :--------------------: |
| function <img width="500"/> | None<img width="500"/> | `function(calendarDate: Date) => void` where `calendarDate` is the updated date. <img width="500"/> | Yes <img width="500"/> |

### title

Label to display on top of picker.

|           Type            |         Default         |       Required        |
| :-----------------------: | :---------------------: | :-------------------: |
| string <img width="500"/> | None <img width="500"/> | No <img width="500"/> |

### type

Determines the the of day picker shown.

|           Type            |          Default           |               Values               |       Required        |
| :-----------------------: | :------------------------: | :--------------------------------: | :-------------------: |
| string <img width="500"/> | **D/M** <img width="500"/> | D or D/M or M/Y <img width="500"/> | No <img width="500"/> |

### defaultDate

Date selected when the user first opens the picker.

|          Type           |             Default             |       Required        |
| :---------------------: | :-----------------------------: | :-------------------: |
| Date <img width="500"/> | Present Date <img width="500"/> | No <img width="500"/> |

### yearsArrayLowerBound

Lower bound on year array for month-year picker.

|           Type            |         Default         |       Required        |
| :-----------------------: | :---------------------: | :-------------------: |
| number <img width="500"/> | 2016 <img width="500"/> | No <img width="500"/> |

### yearsArrayUpperBound

Upper bound on year array fro month-year picker.

|           Type            |             Default             |       Required        |
| :-----------------------: | :-----------------------------: | :-------------------: |
| number <img width="500"/> | Present Year <img width="500"/> | No <img width="500"/> |

### children

Any content to be displayed under day picker.

|             Type             |         Default         |       Required        |
| :--------------------------: | :---------------------: | :-------------------: |
| ReactNode <img width="500"/> | None <img width="500"/> | No <img width="500"/> |

### componentStyle

A react native style object which takes care of styling the calendar component as per your needs

|             Type             |         Default         |       Required        |
| :--------------------------: | :---------------------: | :-------------------: |
| ViewStyle <img width="500"/> | none <img width="500"/> | No <img width="500"/> |
