import { StyleType } from '../../../common/types';

// Message Board component props type

export interface topSectionType {
  exists: boolean;
  titleText?: string;
  supplementaryText?: string;
  buttonLabel?: string;
  backgroundColor?: string;
  fontColor?: string;
  isDark?: boolean;
  customStyles?: StyleType;
}

export interface middleSectionType {
  exists: true;
  titleText?: string;
  supplementaryText?: string;
  buttonLabel?: string;
  backgroundColor?: string;
  splashImageURL?: string;
  fontColor?: string;
  isDark?: boolean;
  customStyles?: StyleType;
}

export interface bottomSectionType {
  exists: boolean;
  titleText?: string;
  buttonLabel?: string;
  backgroundColor?: string;
  fontColor?: string;
  isDark?: boolean;
  customStyles?: StyleType;
}

export interface EmptyStateGenericType {
  topSection?: topSectionType;
  middleSection?: middleSectionType;
  bottomSection?: bottomSectionType;
}
