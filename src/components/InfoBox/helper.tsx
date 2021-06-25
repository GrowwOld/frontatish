/*
  Helper file would be scoped to a
  particular component,if any function
  that does not involves rendering and
  only related to this component,should
  be written here,else if the need of fu-
  nction is required by other components
  then it should written in commonHelpers.
*/

import { BaseStyles, Fonts } from '../../styles';
import { StyleType, ColorType } from '../../common/types';

export const getInfoBoxStyles = (
  backgroundColor: string,
  borderColor: string | undefined,
  Colors: ColorType,
): StyleType => {
  const backgroundColorMap: { [key: string]: string } = {
    info: '#F6F6F7',
    success: '#E5FAF5',
    warning: '#FFF5E0',
    error: '#FAE9E5',
    transparent: Colors.white,
  };
  const borderColorMap: { [key: string]: string } = {
    info: '#DDDEE1',
    success: '#66E3C4',
    warning: '#FFB61B',
    error: '#EB5B3C',
  };
  const withoutBorder = {
    ...BaseStyles.grwInfoBox,
    backgroundColor: backgroundColorMap[backgroundColor],
  };
  if (!borderColor) {
    return withoutBorder;
  }
  return {
    ...withoutBorder,
    borderWidth: 1,
    borderColor: borderColorMap[borderColor],
  };
};

export const getLabelStyles = (
  backgroundColor: string,
  Colors: ColorType,
): StyleType => {
  const labelStyle = {
    // ...BaseStyles.grwInfoBoxLabel,
    fontWeight: 'normal',
    flex: 1,
    padding: 16,
  };
  if (backgroundColor === 'transparent') {
    return {
      ...labelStyle,
      color: Colors.font_1,
    };
  }
  return {
    ...labelStyle,
    color: Colors.font_7,
  };
};

export const getIconStyles = (
  backgroundColor: string,
  Colors: ColorType,
): StyleType => {
  const iconStyle = {
    paddingLeft: 16,
    display: 'flex',
    fontSize: Fonts.size.regular_16,
  };
  if (backgroundColor === 'transparent') {
    return {
      ...iconStyle,
      color: Colors.font_1,
    };
  }
  return {
    ...iconStyle,
    color: Colors.font_7,
  };
};
