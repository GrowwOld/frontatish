import ButtonScreen from '../ButtonExample';
import CheckboxScreen from '../CheckboxExample';
import RadioButtonScreen from '../RadioButtonExample';
import NumPadScreen from '../NumPadExample';
import TableScreen from '../TableExample';
import FadeScreen from '../FadeExample';
import EmptyViewScreen from '../EmptyViewExample';
import InputScreen from '../InputExample';
import DropDownScreen from '../DropdownExample';
import CalendarScreen from '../CalendarExample';
import SwitchScreen from '../SwitchExample';

type objectType = { [index: string]: string };

export const COMPONENT_SCREENS: objectType = {
  BUTTON: 'Button',
  CHECKBOX: 'Checkbox',
  RADIOBUTTON: 'RadioButton',
  NUMPAD: 'Numpad',
  TABLES: 'Tables',
  EMPTYVIEW: 'EmptyView',
  INPUT: 'Input',
  DROPDOWN: 'Dropdown',
  CALENDAR: 'Calendar',
  SWITCH: 'Switch',
};

export const ANIMATED_SCREENS: objectType = { FADE: 'Fade' };

export const SCREEN_MAPPING = [
  // components screen mapping
  { name: COMPONENT_SCREENS.BUTTON, screen: ButtonScreen },
  { name: COMPONENT_SCREENS.CHECKBOX, screen: CheckboxScreen },
  { name: COMPONENT_SCREENS.RADIOBUTTON, screen: RadioButtonScreen },
  { name: COMPONENT_SCREENS.NUMPAD, screen: NumPadScreen },
  { name: COMPONENT_SCREENS.TABLES, screen: TableScreen },
  { name: COMPONENT_SCREENS.EMPTYVIEW, screen: EmptyViewScreen },
  { name: COMPONENT_SCREENS.INPUT, screen: InputScreen },
  { name: COMPONENT_SCREENS.DROPDOWN, screen: DropDownScreen },
  { name: COMPONENT_SCREENS.CALENDAR, screen: CalendarScreen },
  { name: COMPONENT_SCREENS.SWITCH, screen: SwitchScreen },
  // animated screen mapping
  { name: ANIMATED_SCREENS.FADE, screen: FadeScreen },
];
