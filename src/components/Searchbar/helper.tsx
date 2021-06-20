import { StyleSheet } from 'react-native';
import { scaleDimension } from '../../common/utils';
import { ColorType } from '../../common/types';
import { Fonts } from '../../styles';
import { customProps, SearchbarProps } from './types';

export const getStyles = (Colors: ColorType) => {
  return StyleSheet.create({
    searchbarContainer: {
      flexDirection: 'row',
      padding: 12,
      backgroundColor: Colors.white,
      borderRadius: 39,
      borderWidth: 1,
      borderColor: Colors.font_4,
      maxHeight: 54,
    },
    textInput: {
      flex: 4,
      paddingHorizontal: 10,
      paddingVertical: 0,
      fontSize: scaleDimension(Fonts.size.regular_16),
      color: Colors.font_1,
    },
  });
};

export const getCustomProps = ({
  backIcon,
  backIconStyle,
  clearIcon,
  clearIconStyle,
  containerStyle,
  inputStyle,
  leftIcon,
  leftIconStyle,
  leftLogo,
  leftLogoStyle,
  onBackIconPress,
  onClearIconPress,
  onLeftIconPress,
  onLeftLogoPress,
  onRightIconPress,
  onRightLogoPress,
  onPress,
  rightIcon,
  rightIconStyle,
  rightLogo,
  rightLogoStyle,
  showClearIcon,
  showBackIcon,
}: customProps) => ({
  backIcon,
  backIconStyle,
  clearIcon,
  clearIconStyle,
  containerStyle,
  inputStyle,
  leftIcon,
  leftIconStyle,
  leftLogo,
  leftLogoStyle,
  onBackIconPress,
  onClearIconPress,
  onLeftIconPress,
  onLeftLogoPress,
  onRightIconPress,
  onRightLogoPress,
  onPress,
  rightIcon,
  rightIconStyle,
  rightLogo,
  rightLogoStyle,
  showClearIcon,
  showBackIcon,
});

export const getTextInputProps = (
  customSearchbarProps: customProps,
  allSearchbarProps: SearchbarProps,
) => {
  const textInputProps = { ...allSearchbarProps };
  Object.entries(textInputProps).forEach(([key]) => {
    if (key in customSearchbarProps) {
      const keyWithCorrectType = key as keyof SearchbarProps;
      delete textInputProps[keyWithCorrectType];
    }
  });
  return textInputProps;
};
