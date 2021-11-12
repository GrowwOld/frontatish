import { MutableRefObject } from 'react';
import { ListRenderItemInfo, PanResponderInstance } from 'react-native';

export interface ListItemInfo {
  bottomIndex: number;
  numOfItems: number;
  topIndex: number;
}

export interface DraggableListProps {
  setDraggingIdx: (idx: number) => void;
  flatlistTopOffset: MutableRefObject<number>;
  listRenderItem: (
    { item, index }: ListRenderItemInfo<any>,
    panResponder: PanResponderInstance | undefined,
  ) => JSX.Element;
  setData: (data: number[]) => void;
  listData: number[];
  ITEM_HEIGHT: number;
  HOLD_TIME: number;
  listItemInfo?: (info: ListItemInfo) => void;
}
