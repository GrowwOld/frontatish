import { ReactNode } from 'react';
import { TextStyle } from 'react-native';

export interface EmptyViewProps {
  illustration?: ReactNode;
  emptyType?: 'apiError' | 'noData';
  title?: string;
  titleStyle?: TextStyle;
  subTitle?: string;
  subTitleStyle?: TextStyle;
  actionTitle?: string;
  actionType?: 'primary' | 'secondary' | 'default';
  actionPress?: () => void;
}
