import { MutableRefObject, ReactNode } from 'react';
import { FlatList, PanResponderInstance } from 'react-native';

export interface DraggingInfo {
  dragging: boolean;
  draggingIdx: number;
}

export interface DraggableListProps {
  flatList: ReactNode;
  setInfo: (draggingInfo: DraggingInfo) => void;
  flatListRef: MutableRefObject<FlatList<any> | undefined>;
  flatListTopOffset: MutableRefObject<number>;
  scrollOffset: MutableRefObject<number>;
  getView: (item: any, index: number) => ReactNode;
  setData: (data: number[]) => void;
  setPan: (panResponder: PanResponderInstance | undefined) => void;
  propData: number[];
  ITEM_HEIGHT: number;
  HOLD_TIME: number;
}
