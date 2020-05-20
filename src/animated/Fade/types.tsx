import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

export interface FadeProps {
  visible: boolean;
  children: ReactNode;
  containerStyle?: ViewStyle;
}
