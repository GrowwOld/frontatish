/*
  Types related to SearchbarEntry component
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

export type SearchbarEntryProps = {
  containerStyle?: StyleProp<ViewStyle>;
  rightIcon: string;
  leftIcon: string;
  rightLogo: ImageSourcePropType;
  leftLogo: ImageSourcePropType;
  inputStyle?: StyleProp<TextStyle>;
  value?: string;
  onPress?(): void;
  onLeftIconPress?(): void;
  onRightIconPress?(): void;
  onLeftLogoPress?(): void;
  onRightLogoPress?(): void;
};
