import { StyleType, ColorType } from '../../common/types';

export interface TabviewProps {
  routes: routeType[];
  defaultRoute?: number;
  activeTabColor?: string;
  inactiveTabColor?: string;
  tabTextStyle?: StyleType;
  showfullWidthLine?: boolean;
  activeUnderlineStyle?: StyleType;
  fullWidthLineStyle?: StyleType;
  Colors: ColorType;
  style?: StyleType;
}

export interface routeType {
  title: string;
  component: any;
}

export interface TabViewState {
  tabPosition: number;
  containerWidth: number;
  tabWidth: number;
  sliderTranslateX: any;
}
