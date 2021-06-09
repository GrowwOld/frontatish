/*
  Types related to Searchbar component
  will be defined here,which can be
  used by helper method or the ui-co-
  mponent.
*/

import { ViewStyle, StyleProp, TextStyle } from 'react-native';

export type SearchbarProps = {
  placeholder?: string;
  placeholderTextColor?: string;
  value: string;
  autoFocus?: boolean;
  onChangeText(text: string): void;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  clearIcon: string;
  backIcon: string;
  showClearIcon?: boolean;
  showBackIcon?: boolean;
  onClearIconPress?(): void;
  onBackIconPress?(): void;
};
