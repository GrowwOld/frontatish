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
} from 'react-native';

export type SearchbarProps = {
  autoFocus?: boolean;
  backIcon?: string;
  clearIcon?: string;
  containerStyle?: StyleProp<ViewStyle>;
  editable: boolean;
  inputStyle?: StyleProp<TextStyle>;
  leftIcon?: string;
  leftLogo?: ImageSourcePropType;
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
  rightLogo?: ImageSourcePropType;
  selectionColor?: string;
  showBackIcon?: boolean;
  showClearIcon?: boolean;
  value: string;
};
