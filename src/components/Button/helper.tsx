/*
  Helper file would be scoped to a
  particular component,if any function
  that does not involves rendering and
  only related to this component,should
  be written here,else if the need of fu-
  nction is required by other components
  then it should written in commonHelpers.
*/

import { BaseStyles } from '../../styles';
import { StyleType, ColorType } from '../../common/types';

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

export const getBtnStyles = (
  btnType: string,
  Colors: ColorType,
  disabled: boolean | null | undefined
): StyleType => {
  switch (btnType) {
    case 'primary':
      return {
        ...BaseStyles.grwButton,
        backgroundColor: disabled ? Colors.DUCK_EGG_BLUE : Colors.GREEN_BLUE,
        color: Colors.WHITE,
        // opacity: disabled ? 0.6 : 1
      };
    case 'secondary':
      return {
        ...BaseStyles.grwButton,
        backgroundColor: Colors.WHITE,
        borderColor: disabled ? Colors.DUCK_EGG_BLUE : Colors.GREEN_BLUE,
        // opacity: disabled ? 0.6 : 1,
        borderWidth: 1,
      };
    case 'default':
      return {
        ...BaseStyles.grwButton,
        backgroundColor: Colors.WHITE,
        borderColor: Colors.DARK_SILVER,
        borderWidth: 1,
      };
    default: {
      return {};
    }
  }
};

export const getLabelStyles = (
  btnType: string,
  Colors: ColorType,
  disabled: boolean | null | undefined
): StyleType => {
  switch (btnType) {
    case 'primary':
      return {
        ...BaseStyles.grwLabel,
        color: Colors.CONSTANT_WHITE,
      };
    case 'secondary':
      return {
        ...BaseStyles.grwLabel,
        color: disabled ? Colors.DUCK_EGG_BLUE : Colors.GREEN_BLUE,
      };
    case 'default':
      return {
        ...BaseStyles.grwLabel,
        color: disabled ? Colors.DUCK_EGG_BLUE : Colors.GREEN_BLUE,
      };
    default: {
      return {};
    }
  }
};
