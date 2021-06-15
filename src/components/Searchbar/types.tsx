/*
  Types related to Searchbar component
  will be defined here,which can be
  used by helper method or the ui-co-
  mponent.
*/

import React from 'react';
import {
  ViewStyle,
  StyleProp,
  TextStyle,
  ImageSourcePropType,
  ImageStyle,
  TextInput,
} from 'react-native';

export type customProps = {
  backIcon?: string;
  backIconStyle?: StyleProp<TextStyle>;
  clearIcon?: string;
  clearIconStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  leftIcon?: string;
  leftIconStyle?: StyleProp<TextStyle>;
  leftLogo?: ImageSourcePropType;
  leftLogoStyle?: StyleProp<ImageStyle>;
  onBackIconPress?(): void;
  onClearIconPress?(): void;
  onLeftIconPress?(): void;
  onLeftLogoPress?(): void;
  onRightIconPress?(): void;
  onRightLogoPress?(): void;
  onPress?(): void;
  rightIcon?: string;
  rightIconStyle?: StyleProp<TextStyle>;
  rightLogo?: ImageSourcePropType;
  rightLogoStyle?: StyleProp<ImageStyle>;
  showBackIcon?: boolean;
  showClearIcon?: boolean;
};

export type SearchbarProps = React.ComponentProps<typeof TextInput> &
  customProps;
