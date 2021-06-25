import React, { useRef } from 'react';
import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  Dimensions,
  PanResponder,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
// eslint-disable-next-line import/no-unresolved
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ModalProps } from './types';

const Modal = (props: ModalProps) => {
  const { open, close, children, contentHeight, swipeThreshold } = props;

  const height = useRef(new Animated.Value(0)).current;
  const fullHeight = useRef(false);

  const panResponder = useRef(
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
        console.log('grant');
      },
      onPanResponderMove: (_, gestureState) => {
        // The most recent move distance is gestureState.move{X,Y}
        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}

        height.setValue(Dimensions.get('window').height - gestureState.moveY);
      },
      onPanResponderTerminationRequest: () => true,
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy < -swipeThreshold && !fullHeight.current) {
          Animated.timing(height, {
            toValue: Dimensions.get('window').height,
            duration: 300,
            useNativeDriver: false,
          }).start(() => {
            fullHeight.current = true;
          });
        } else if (
          gestureState.dy > swipeThreshold &&
          height._value > contentHeight
        ) {
          Animated.timing(height, {
            toValue: contentHeight,
            duration: 300,
            useNativeDriver: false,
          }).start(() => {
            fullHeight.current = false;
          });
        } else if (
          gestureState.dy > swipeThreshold &&
          height._value < contentHeight
        ) {
          onClose();
          fullHeight.current = false;
        } else {
          height.setValue(
            fullHeight.current
              ? Dimensions.get('window').height
              : contentHeight,
          );
        }

        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
      },
      onPanResponderTerminate: () => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: () => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      },
    }),
  ).current;

  const onOpen = () => {
    Animated.timing(height, {
      toValue: contentHeight,
      duration: 700,
      useNativeDriver: false,
    }).start();
  };

  const onClose = () => {
    Animated.timing(height, {
      toValue: 0,
      duration: 700,
      useNativeDriver: false,
    }).start(() => close());
  };

  return (
    <>
      {open && (
        <View
          style={{
            // flex: 1,
            justifyContent: 'flex-end',
            // alignItems: 'center',
            backgroundColor: 'grey',
            width: '100%',
            // height: 400,
            // bottom: 0,
            height: Dimensions.get('window').height,
            position: 'absolute',
            // paddingHorizontal: 20,
            zIndex: 1,
            // transform: [{ translateY: animated }],
          }}
          onLayout={onOpen}
        >
          <TouchableWithoutFeedback onPress={onClose}>
            <View
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                opacity: 0.3,
                // backgroundColor: 'rgba(0,0,0,0.7)',
              }}
            />
          </TouchableWithoutFeedback>
          <Animated.View
            style={{
              backgroundColor: '#fff',
              // marginTop: 40,
              // bottom: 0,
              // alignSelf: 'flex-end',
              // height: contentHeight,
              padding: 10,

              // justifyContent: 'flex-end',
              // flex: 1,
              width: '100%',
              maxHeight: height,
            }}
          >
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                flexDirection: 'row',
                height: 25,
                marginBottom: 10,
              }}
            >
              <View
                style={{
                  justifyContent: 'space-between',
                  height: 25,
                  padding: 7,
                  width: 50,
                  // borderWidth: 1,
                  backgroundColor: 'rgba(0,0,0,0.1)',
                }}
                {...panResponder.panHandlers}
              >
                <View style={{ borderTopWidth: 1, height: 1 }} />
                <View style={{ borderTopWidth: 1, height: 1 }} />
                <View style={{ borderTopWidth: 1, height: 1 }} />
              </View>
              <TouchableOpacity
                onPress={onClose}
                style={{ position: 'absolute', right: 0 }}
              >
                <Icon name="close" size={20} />
              </TouchableOpacity>
            </View>
            <ScrollView>{children}</ScrollView>
            <Text style={{ flex: 1 }}>Hey</Text>
          </Animated.View>
        </View>
      )}
    </>
  );
};

Modal.defaultProps = {
  contentHeight: (Dimensions.get('window').height * 3) / 4,
  swipeThreshold: 100,
};

export default Modal;
