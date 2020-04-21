/*
  Helper file would be scoped to a
  particular component,if any function
  that does not involves rendering and
  only related to this component,should
  be written here,else if the need of fu-
  nction is required by other components
  then it should written in commonHelpers.
*/

import { BaseStyles, Colors } from '../../styles';

export const getBtnBgColorByType = (btnType: string): string => {
  const colorMapForBtn: any = {
    primary: Colors.GREEN_BLUE,
    secondary: Colors.WHITE,
    tertiary: Colors.WHITE
  };
  return colorMapForBtn[btnType];
};

export const getBtnTextColorByType = (btnType: string): string => {
  const colorMapForTxt: any = {
    primary: Colors.WHITE,
    secondary: Colors.GREEN_BLUE,
    tertiary: Colors.GREEN_BLUE,
  };
  return colorMapForTxt[btnType];
};

export const getBtnBorderStyles = (btnType: string): any => {
  const borderStyleMapForBtn: any = {
    primary: {},
    secondary: BaseStyles.borderSecondaryBtn,
    tertiary: BaseStyles.borderTertiary
  };
  return borderStyleMapForBtn[btnType];
};
