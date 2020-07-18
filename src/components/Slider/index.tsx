import React, { useRef } from 'react';
import { View } from 'react-native';

// eslint-disable-next-line import/no-unresolved
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { useColors } from '../../themes';

const Slider = () => {
  const Colors = useColors();
  const pan = useRef(new Animated.Value(0)).current;
  const onGestureEvent = Animated.event([
    { nativeEvent: { translationX: pan } },
  ]);
  // const { nativeEvent } = e;

  // pan.setValue(nativeEvent.translationX);

  const onHandlerStateChage = (e) => {
    if (e.nativeEvent.oldState === State.ACTIVE) {
      // pan.flattenOffset();
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
      // onLayout={handleLayout}
    >
      <PanGestureHandler
        onGestureEvent={onGestureEvent}
        onHandlerStateChange={onHandlerStateChage}
      >
        <Animated.View
          style={{
            height: 20,
            width: 20,
            borderRadius: 10,
            backgroundColor: Colors.primary,
            transform: [{ translateX: pan }],
          }}
        />
      </PanGestureHandler>
    </View>
  );
};

export default Slider;
