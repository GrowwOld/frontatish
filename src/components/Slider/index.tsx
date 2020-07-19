import React, { useRef, useState } from 'react';
import { View, Animated, useWindowDimensions } from 'react-native';

// eslint-disable-next-line import/no-unresolved
// import Animated from 'react-native-reanimated';
// eslint-disable-next-line import/no-unresolved
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { useColors } from '../../themes';

interface SliderProps {
  maxValue: number;
  minValue: number;
  setValue?: (value: number) => void;
}
const Slider = (props: SliderProps) => {
  const [barWidth, setBarWidth] = useState(0);
  const { maxValue, minValue, setValue } = props;
  let latestX = useRef(0).current;
  const pan = useRef(new Animated.Value(0)).current;
  const Colors = useColors();
  const handleLayout = (e) => {
    setBarWidth(e.nativeEvent.layout.width);
  };
  const onGestureEvent =
    // // to start to drag only after a 10% drag threshold
    // const DRAG_THRESHOLD = 40;
    // // to limit the drag on 80% of the screen height
    // const DRAG_LIMIT = barWidth - 20;
    // const eventValue = {
    //   absoluteX: e.nativeEvent.absoluteX,
    //   translateX: e.nativeEvent.translateX,
    // };
    // if (
    //   Math.abs(e.nativeEvent.absoluteX) > DRAG_THRESHOLD &&
    //   Math.abs(e.nativeEvent.absoluteX) < DRAG_LIMIT
    // ) {
    //   return Animated.event([null, { absoluteX: 0 }])(e, eventValue);
    // }
    // return Animated.event([null, { translationX: pan }])(e, eventValue);
    Animated.event([{ nativeEvent: { translationX: pan } }], {
      useNativeDriver: true,
      // listener: (e) => {
      //   const { absoluteX, translationX } = e.nativeEvent;
      //   const t = barWidth / (absoluteX - 40);
      //   const v = 100 * t;
      //   setValue(v.toFixed(2));
      //   // console.log('norm', norm);
      //   // setValue(normalizedValue);
      // },
      // listener: (e, gestureState) =>
      //   console.log('event is', e, 'gest', gestureState),
    });

  // pan.setValue(nativeEvent.translationX);

  const onHandlerStateChage = (e) => {
    if (e.nativeEvent.oldState === State.ACTIVE) {
      //  console.log('translationX', e.nativeEvent);
      latestX += e.nativeEvent.translationX;
      // console.log(pan.flattenOffset);
      // console.log(pan.setOffset);
      console.log(e.nativeEvent);
      pan.setOffset(latestX);
      pan.setValue(0);
      // Animated.spring(pan, {
      //   toValue: 0,
      //   useNativeDriver: true,
      // }).start();
    }
  };
  return (
    <View
      style={{
        height: 6,
        width: '100%',
        backgroundColor: Colors.font_3,
        borderRadius: 7,
        justifyContent: 'center',
      }}
      onLayout={handleLayout}
    >
      <PanGestureHandler
        onGestureEvent={onGestureEvent}
        onHandlerStateChange={onHandlerStateChage}
      >
        <Animated.View
          style={{
            height: 25,
            width: 25,
            borderRadius: 25 / 2,
            backgroundColor: Colors.primary,
            transform: [
              {
                translateX: pan.interpolate({
                  inputRange: [0, barWidth],
                  outputRange: [0, barWidth - 20],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}
        />
      </PanGestureHandler>
    </View>
  );
};

export default Slider;
