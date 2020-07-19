import ButtonScreen from '../ButtonExample';
import CheckboxScreen from '../CheckboxExample';
import RadioButtonScreen from '../RadioButtonExample';
import NumPadScreen from '../NumPadExample';
import TableScreen from '../TableExample';
// removing for now,we can have more customization of it later
// import PopupScreen from '../PopupExample';
import FadeScreen from '../FadeExample';
import SplashScreen from '../SplashExample';
import SliderScreen from '../SliderExample';
import CalendarScreen from '../CalendarExample';

export const COMPONENT_SCREENS = {
  BUTTON: 'Button',
  CHECKBOX: 'Checkbox',
  RADIOBUTTON: 'Radiobutton',
  NUMPAD: 'Numpad',
  TABLES: 'Tables',
  // SWITCH: 'Switch',
  // POPUP: 'Popup',
  SLIDER: 'Slider',
  CALENDAR: 'Calendar',
};

export const ANIMATED_SCREENS = { FADE: 'Fade', SPLASH: 'Splash' };

export const SCREEN_MAPPING = [
  // components screen mapping
  { name: COMPONENT_SCREENS.BUTTON, screen: ButtonScreen },
  { name: COMPONENT_SCREENS.CHECKBOX, screen: CheckboxScreen },
  { name: COMPONENT_SCREENS.RADIOBUTTON, screen: RadioButtonScreen },
  { name: COMPONENT_SCREENS.NUMPAD, screen: NumPadScreen },
  { name: COMPONENT_SCREENS.TABLES, screen: TableScreen },
  // { name: COMPONENT_SCREENS.SWITCH, screen: SwitchScreen },
  // { name: COMPONENT_SCREENS.POPUP, screen: PopupScreen },
  { name: COMPONENT_SCREENS.SLIDER, screen: SliderScreen },
  { name: COMPONENT_SCREENS.CALENDAR, screen: CalendarScreen },
  // animated screen mapping
  { name: ANIMATED_SCREENS.FADE, screen: FadeScreen },
  { name: ANIMATED_SCREENS.SPLASH, screen: SplashScreen },
];
