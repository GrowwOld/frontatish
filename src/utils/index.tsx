import { BaseStyles, Colors } from '../styles';

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
}

export const dummfunct = () => {};
