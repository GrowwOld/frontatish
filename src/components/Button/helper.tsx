/*
  Helper file would be scoped to a
  particular component,if any function
  that does not involves rendering and
  only related to this component,should
  be written here,else if the need of fu-
  nction is required by other components
  then it should written in commonHelpers.
*/

import { BaseStyles, getColors } from '../../styles';
import { ButtonStyles } from './types';

export const getBtnBgColorByType = (btnType: string, Colors: any)
  : string => {
  const colorMapForBtn: any = {
    primary: Colors.GREEN_BLUE,
    secondary: Colors.WHITE,
    default: Colors.WHITE
  };
  return colorMapForBtn[btnType];
};

export const getBtnTextColorByType = (btnType: string, Colors: any)
  : string => {
  const colorMapForTxt: any = {
    primary: Colors.WHITE,
    secondary: Colors.GREEN_BLUE,
    default: Colors.GREEN_BLUE,
  };
  return colorMapForTxt[btnType];
};

export const getBtnBorderStyles = (btnType: string): any => {
  const borderStyleMapForBtn: any = {
    primary: {},
    secondary: {},
    default: {}
  };
  return borderStyleMapForBtn[btnType];
};

export const getBtnStyles = (btnType: string, Colors: any): ButtonStyles => {
  switch (btnType) {
    case 'primary':
      return {
        ...BaseStyles.grwButton,
        backgroundColor: Colors.GREEN_BLUE,
      };
    case 'secondary':
      return {
        ...BaseStyles.grwButton,
        borderColor: Colors.GREEN_BLUE,
        borderWidth: 1,
      };
    case 'default':
      return {
        ...BaseStyles.grwButton,
        borderColor: Colors.DARK_SILVER,
        borderWidth: 1,
      };
    default: {
      return {};
    }
  }
};
