import { Colors } from '../styles';

export const getBgColorByType = (type: string): string => {
  const colorMapForButton: any = {
    primary: Colors.GREEN_BLUE,
    secondary: Colors.WHITE
  };
  return colorMapForButton[type];
}

export const dummfunct = () => {};
