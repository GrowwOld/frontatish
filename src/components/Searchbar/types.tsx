/*
  Types related to Searchbar component
  will be defined here,which can be
  used by helper method or the ui-co-
  mponent.
*/

import {
  ViewStyle,
  StyleProp,
  TextStyle,
  ImageSourcePropType,
  ImageStyle,
} from 'react-native';

export type SearchbarProps = {
  autoFocus?: boolean;
  backIcon?: string;
  backIconStyle?: StyleProp<TextStyle>;
  clearIcon?: string;
  clearIconStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  editable: boolean;
  inputStyle?: StyleProp<TextStyle>;
  leftIcon?: string;
  leftIconStyle?: StyleProp<TextStyle>;
  leftLogo?: ImageSourcePropType;
  leftLogoStyle?: StyleProp<ImageStyle>;
  onBackIconPress?(): void;
  onChangeText(text: string): void;
  onClearIconPress?(): void;
  onLeftIconPress?(): void;
  onLeftLogoPress?(): void;
  onRightIconPress?(): void;
  onRightLogoPress?(): void;
  onPress?(): void;
  placeholder?: string;
  placeholderTextColor?: string;
  rightIcon?: string;
  rightIconStyle?: StyleProp<TextStyle>;
  rightLogo?: ImageSourcePropType;
  rightLogoStyle?: StyleProp<ImageStyle>;
  selectionColor?: string;
  showBackIcon?: boolean;
  showClearIcon?: boolean;
  value: string;
};
