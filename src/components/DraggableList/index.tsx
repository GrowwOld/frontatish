import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  View,
  Animated,
  PanResponder,
  PanResponderInstance,
  FlatList,
  StyleSheet,
  NativeScrollEvent,
  NativeSyntheticEvent,
  LayoutChangeEvent,
} from 'react-native';
import { DraggableListProps } from './types';

const DraggableList = (props: DraggableListProps) => {
  const {
    setDraggingIdx,
    flatlistTopOffset,
    ITEM_HEIGHT,
    HOLD_TIME,
    listRenderItem,
    listItemInfo,
    setData,
    listData,
  } = props;

  const data = listData;

  setData(data);
  const [draggingInfo, setDraggingInfo] = useState({
    dragging: false,
    draggingIdx: -1,
  });

  setDraggingIdx(draggingInfo.draggingIdx);
  const [panResponder, setPanResponder] = useState<PanResponderInstance>();
  const flatListHeight = useRef(0);

  const point = useRef(new Animated.ValueXY()).current;

  const currentIdx = useRef(-1);
  const currentY = useRef(-1);
  const currentVelY = useRef(0);
  const active = useRef(false);
  const listRef = useRef<FlatList<any>>(null);
  const scrollOffset = useRef(0);

  const numOfItemsOnScreen = Math.ceil(flatListHeight.current / ITEM_HEIGHT);

  let longPressTimer: NodeJS.Timeout;

  useEffect(() => {
    reorderData();
  }, [draggingInfo]);

  const onLongPress = () => {
    // you can add some animation effect here as wll
    setPanResponder(onLongPressPanResponder);
  };

  const onLongPressPanResponder = useRef(
    PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: () => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        // gestureState.d{x,y} will be set to zero now
      },
      onPanResponderMove: (_, gestureState) => {
        setDraggingInfo({ dragging: true, draggingIdx: currentIdx.current });

        currentY.current = Math.max(
          flatlistTopOffset.current,
          Math.min(
            flatlistTopOffset.current + flatListHeight.current,
            gestureState.moveY,
          ),
        );
        currentVelY.current = gestureState.vy;

        Animated.event([{ y: point.y }], { useNativeDriver: false })({
          y: Math.max(
            0,
            Math.min(
              flatListHeight.current - ITEM_HEIGHT,
              gestureState.moveY - flatlistTopOffset.current - ITEM_HEIGHT / 2,
            ),
          ),
        });
        active.current = true;

        // The most recent move distance is gestureState.move{X,Y}
        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
      },
      onPanResponderTerminationRequest: () => false,
      onPanResponderRelease: () => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
        reset();
      },
      onPanResponderTerminate: () => {
        // Another component has become the responder, so this gesture
        // should be cancelled
        reset();
      },
      onShouldBlockNativeResponder: () => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return false;
      },
    }),
  ).current;

  const normalPanResponder = useRef(
    PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: (_, gestureState) => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        // gestureState.d{x,y} will be set to zero now

        currentIdx.current = yToIndex(gestureState.y0);

        Animated.event([{ y: point.y }], { useNativeDriver: false })({
          y: gestureState.y0 - flatlistTopOffset.current - ITEM_HEIGHT / 2,
        });

        longPressTimer = setTimeout(onLongPress, HOLD_TIME);
      },
      onPanResponderMove: () => {
        // The most recent move distance is gestureState.move{X,Y}
        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
      },
      onPanResponderTerminationRequest: () => false,
      onPanResponderRelease: () => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded

        reset();
      },
      onPanResponderTerminate: () => {
        // Another component has become the responder, so this gesture
        // should be cancelled

        reset();
      },
      onShouldBlockNativeResponder: () => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return false;
      },
    }),
  ).current;

  if (!panResponder) {
    setPanResponder(normalPanResponder);
  }

  const reset = () => {
    if (!panResponder) {
      clearTimeout(longPressTimer); // clean the timeout handler
    }
    setDraggingInfo({ dragging: false, draggingIdx: -1 });
    setPanResponder(undefined);
    active.current = false;
  };

  const reorderData = () => {
    if (!active.current) return;

    requestAnimationFrame(() => {
      // check if we want to scroll
      if (
        currentY.current - flatlistTopOffset.current >
          (flatListHeight.current * 3) / 4 &&
        currentVelY.current > 0
      ) {
        listRef.current?.scrollToOffset({
          offset:
            scrollOffset.current +
            Math.min(
              currentY.current -
                flatlistTopOffset.current -
                (flatListHeight.current * 3) / 4,
              25,
            ),
          animated: false,
        });
      } else if (
        currentY.current - flatlistTopOffset.current <
          (flatListHeight.current * 1) / 4 &&
        currentVelY.current < 0
      ) {
        listRef.current?.scrollToOffset({
          offset:
            scrollOffset.current +
            Math.max(
              currentY.current -
                flatlistTopOffset.current -
                (flatListHeight.current * 1) / 4,
              -25,
            ),
          animated: false,
        });
      }
      // check if we need to reorder
      const newIdx = yToIndex(currentY.current);
      if (currentIdx.current !== newIdx) {
        data[newIdx] = swap(
          data[currentIdx.current],
          (data[currentIdx.current] = data[newIdx]),
        );
        setDraggingInfo({ dragging: true, draggingIdx: newIdx });
        currentIdx.current = newIdx;
      }
      reorderData();
    });
  };

  const yToIndex = (y: number) =>
    Math.min(
      data.length - 1,
      Math.max(
        0,
        Math.floor(
          (scrollOffset.current + y - flatlistTopOffset.current) / ITEM_HEIGHT,
        ),
      ),
    );

  const swap = function (x: any) {
    return x;
  };

  const keyExtractor = useCallback((item) => item.toString(), []);
  const renderItem = useCallback((item) => listRenderItem(item, panResponder), [
    reset,
  ]);
  const setScrollOffset = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollOffset.current = event.nativeEvent.contentOffset.y;
    if (listItemInfo)
      listItemInfo({
        numOfItems: numOfItemsOnScreen,
        topIndex: Math.floor(scrollOffset.current / ITEM_HEIGHT),
        bottomIndex: Math.floor(
          (scrollOffset.current + flatListHeight.current) / ITEM_HEIGHT,
        ),
      });
  };
  const onListLayout = (event: LayoutChangeEvent) => {
    flatListHeight.current = event.nativeEvent.layout.height;
    if (listItemInfo)
      listItemInfo({
        numOfItems: Math.ceil(flatListHeight.current / ITEM_HEIGHT),
        topIndex: Math.floor(scrollOffset.current / ITEM_HEIGHT),
        bottomIndex: Math.floor(
          (scrollOffset.current + flatListHeight.current) / ITEM_HEIGHT,
        ),
      });
  };
  const getItemLayout = (_: any, index: number) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  });

  const getFlatList = () => {
    return (
      <FlatList
        scrollEnabled={!draggingInfo.dragging}
        // disableVirtualization={false}
        ref={listRef}
        getItemLayout={getItemLayout}
        onScroll={setScrollOffset}
        scrollEventThrottle={16}
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={style.fullWidth}
        onLayout={onListLayout}
      />
    );
  };

  return (
    <View style={style.fullWidth}>
      {draggingInfo.dragging ? (
        <Animated.View
          style={[style.animatedView, { top: point.getLayout().top }]}
        >
          {renderItem({
            item: data[draggingInfo.draggingIdx],
            index: -1,
          })}
        </Animated.View>
      ) : null}

      {getFlatList()}
    </View>
  );
};

DraggableList.defaultProps = {
  HOLD_TIME: 500,
};

const style = StyleSheet.create({
  animatedView: {
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    transform: [{ scale: 1.03 }],
  },
  fullWidth: { width: '100%' },
});
export default DraggableList;
