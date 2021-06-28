/*
  Helper file would be scoped to a
  particular component,if any function
  that does not involves rendering and
  only related to this component,should
  be written here,else if the need of fu-
  nction is required by other components
  then it should written in '../common/utils'.
*/

import { BaseStyles } from '../../styles';
import { StyleType, ColorType } from '../../common/types';

export const getBtnTextColorByType = (
  btnType: string,
  Colors: ColorType,
): string => {
  const colorMapForTxt: any = {
    primary: Colors.white,
    secondary: Colors.primary,
    default: Colors.primary,
  };
  return colorMapForTxt[btnType];
};

export const getBtnBorderStyles = (btnType: string): any => {
  const borderStyleMapForBtn: any = {
    primary: {},
    secondary: {},
    default: {},
  };
  return borderStyleMapForBtn[btnType];
};

export const getBtnStyles = (
  btnType: string,
  Colors: ColorType,
  disabled: boolean | null | undefined,
): StyleType => {
  switch (btnType) {
    case 'primary':
      return {
        ...BaseStyles.grwButton,
        backgroundColor: disabled ? Colors.font_3 : Colors.primary,
        color: Colors.white,
        // opacity: disabled ? 0.6 : 1
      };
    case 'secondary':
      return {
        ...BaseStyles.grwButton,
        backgroundColor: Colors.white,
        borderColor: disabled ? Colors.font_3 : Colors.primary,
        // opacity: disabled ? 0.6 : 1,
        borderWidth: 2,
      };
    default: {
      return {};
    }
  }
};

export const getLabelStyles = (
  btnType: string,
  Colors: ColorType,
  disabled: boolean | null | undefined,
): StyleType => {
  switch (btnType) {
    case 'primary':
      return {
        ...BaseStyles.grwLabel,
        color: Colors.white,
      };
    case 'secondary':
      return {
        ...BaseStyles.grwLabel,
        color: disabled ? Colors.font_3 : Colors.primary,
      };
    default: {
      return {};
    }
  }
};
