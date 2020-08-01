import ButtonScreen from '../ButtonExample';
import CheckboxScreen from '../CheckboxExample';
import RadioButtonScreen from '../RadioButtonExample';
import NumPadScreen from '../NumPadExample';
import TableScreen from '../TableExample';
import FadeScreen from '../FadeExample';
import CalendarScreen from '../CalendarExample';
import EmptyStateScreen from '../EmptyStatesExample';
import InputScreen from '../InputExample';
import DropDownScreen from '../DropdownExample';

export const COMPONENT_SCREENS = {
  BUTTON: 'Button',
  CHECKBOX: 'Checkbox',
  RADIOBUTTON: 'RadioButton',
  NUMPAD: 'Numpad',
  TABLES: 'Tables',
  CALENDAR: 'Calendar',
  EMPTYSTATES: 'EmptyStates',
  INPUT: 'Input',
  DROPDOWN: 'Dropdown',
};

export const ANIMATED_SCREENS = { FADE: 'Fade' };

export const SCREEN_MAPPING = [
  // components screen mapping
  { name: COMPONENT_SCREENS.BUTTON, screen: ButtonScreen },
  { name: COMPONENT_SCREENS.CHECKBOX, screen: CheckboxScreen },
  { name: COMPONENT_SCREENS.RADIOBUTTON, screen: RadioButtonScreen },
  { name: COMPONENT_SCREENS.NUMPAD, screen: NumPadScreen },
  { name: COMPONENT_SCREENS.TABLES, screen: TableScreen },
  { name: COMPONENT_SCREENS.CALENDAR, screen: CalendarScreen },
  { name: COMPONENT_SCREENS.EMPTYSTATES, screen: EmptyStateScreen },
  { name: COMPONENT_SCREENS.INPUT, screen: InputScreen },
  { name: COMPONENT_SCREENS.DROPDOWN, screen: DropDownScreen },
  // animated screen mapping
  { name: ANIMATED_SCREENS.FADE, screen: FadeScreen },
];
