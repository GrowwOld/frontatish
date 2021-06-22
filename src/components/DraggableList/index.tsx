import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Animated,
  PanResponder,
  PanResponderInstance,
} from 'react-native';
import { DraggableListProps } from './types';

const DraggableList = (props: DraggableListProps) => {
  const {
    flatList,
    setInfo,
    flatListRef,
    scrollOffset,
    flatListTopOffset,
    ITEM_HEIGHT,
    HOLD_TIME,
    getView,
    setPan,
    setData,
    propData,
  } = props;

  const data = propData;

  setData(data);
  const [draggingInfo, setDraggingInfo] = useState({
    dragging: false,
    draggingIdx: -1,
  });

  setInfo(draggingInfo);
  const [panResponder, setPanResponder] = useState<PanResponderInstance>();
  setPan(panResponder);

  const point = useRef(new Animated.ValueXY()).current;

  const flatListHeight = useRef(0);
  const currentIdx = useRef(-1);
  const currentY = useRef(-1);
  const currentVelY = useRef(0);
  const active = useRef(false);

  let longPressTimer;

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
          flatListTopOffset.current,
          Math.min(
            flatListTopOffset.current + flatListHeight.current,
            gestureState.moveY,
          ),
        );
        currentVelY.current = gestureState.vy;

        Animated.event([{ y: point.y }], { useNativeDriver: false })({
          y: Math.max(
            0,
            Math.min(
              flatListHeight.current - ITEM_HEIGHT,
              gestureState.moveY - flatListTopOffset.current - ITEM_HEIGHT / 2,
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
          y: gestureState.y0 - flatListTopOffset.current - ITEM_HEIGHT / 2,
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
        if (!panResponder) {
          clearTimeout(longPressTimer); // clean the timeout handler
        }

        reset();
      },
      onPanResponderTerminate: () => {
        // Another component has become the responder, so this gesture
        // should be cancelled
        if (!panResponder) {
          clearTimeout(longPressTimer); // clean the timeout handler
        }

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
    setDraggingInfo({ dragging: false, draggingIdx: -1 });
    setPanResponder(undefined);
    active.current = false;
  };

  const reorderData = () => {
    if (!active.current) return;

    requestAnimationFrame(() => {
      // check if we want to scroll
      if (
        currentY.current - flatListTopOffset.current >
          (flatListHeight.current * 3) / 4 &&
        currentVelY.current > 0
      ) {
        flatListRef.current?.scrollToOffset({
          offset:
            scrollOffset.current +
            Math.min(
              currentY.current -
                flatListTopOffset.current -
                (flatListHeight.current * 3) / 4,
              25,
            ),
          animated: false,
        });
      } else if (
        currentY.current - flatListTopOffset.current <
          (flatListHeight.current * 1) / 4 &&
        currentVelY.current < 0
      ) {
        flatListRef.current?.scrollToOffset({
          offset:
            scrollOffset.current +
            Math.max(
              currentY.current -
                flatListTopOffset.current -
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
          (scrollOffset.current + y - flatListTopOffset.current) / ITEM_HEIGHT,
        ),
      ),
    );

  const swap = function (x: any) {
    return x;
  };

  return (
    <View
      style={{
        paddingHorizontal: 20,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onLayout={(event) => {
        flatListHeight.current = event.nativeEvent.layout.height;
      }}
    >
      {draggingInfo.dragging ? (
        <Animated.View
          style={{
            position: 'absolute',
            zIndex: 2,
            top: point.getLayout().top,
            width: '100%',
            scaleX: 1.03,
          }}
        >
          {getView(data[draggingInfo.draggingIdx], -1)}
        </Animated.View>
      ) : null}

      {flatList}
    </View>
  );
};

DraggableList.defaultProps = {
  HOLD_TIME: 500,
};
export default DraggableList;
