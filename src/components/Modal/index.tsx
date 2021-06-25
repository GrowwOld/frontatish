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
import { useColors } from '../../index';
import { ModalProps } from './types';

const Modal = (props: ModalProps) => {
  const Colors = useColors();
  const {
    open,
    close,
    children,
    contentHeight,
    swipeThreshold,
    position,
    entryDirection,
    exitDirection,
    swipeable,
    closeButton,
  } = props;

  const getEntryExitValues = (direction: string) => {
    switch (direction) {
      case 'up':
        return { x: 0, y: -Dimensions.get('screen').height };
      case 'left':
        return { x: -Dimensions.get('screen').width, y: 0 };
      case 'right':
        return { x: Dimensions.get('screen').width, y: 0 };
      default:
        return { x: 0, y: Dimensions.get('screen').height };
    }
  };

  const height = useRef(new Animated.Value(contentHeight)).current;
  const xyPos = useRef(new Animated.ValueXY(getEntryExitValues(entryDirection)))
    .current;
  const fullHeight = useRef(false);

  const panResponder = useRef(
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
        height.setValue(
          position === 'top'
            ? gestureState.y0
            : Dimensions.get('window').height - gestureState.y0,
        );
      },
      onPanResponderMove: (_, gestureState) => {
        // The most recent move distance is gestureState.move{X,Y}
        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}

        height.setValue(
          position === 'top'
            ? gestureState.moveY
            : Dimensions.get('window').height - gestureState.moveY,
        );
      },
      onPanResponderTerminationRequest: () => true,
      onPanResponderRelease: (_, gestureState) => {
        if (position === 'top') {
          if (gestureState.dy > swipeThreshold && !fullHeight.current) {
            toFullHeight();
          } else if (
            -gestureState.dy > swipeThreshold &&
            height._value > contentHeight
          ) {
            toContentHeight();
          } else if (
            -gestureState.dy > swipeThreshold &&
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
        } else if (gestureState.dy < -swipeThreshold && !fullHeight.current) {
          toFullHeight();
        } else if (
          gestureState.dy > swipeThreshold &&
          height._value > contentHeight
        ) {
          toContentHeight();
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
    height.setValue(contentHeight);
    Animated.timing(xyPos, {
      toValue: { x: 0, y: 0 },
      duration: 700,
      useNativeDriver: false,
    }).start();
  };

  const toFullHeight = () => {
    Animated.timing(height, {
      toValue: Dimensions.get('window').height,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      fullHeight.current = true;
    });
  };

  const toContentHeight = () => {
    Animated.timing(height, {
      toValue: contentHeight,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      fullHeight.current = false;
    });
  };
  const onClose = () => {
    Animated.timing(xyPos, {
      toValue: swipeable
        ? getEntryExitValues(entryDirection)
        : getEntryExitValues(exitDirection ?? entryDirection),
      duration: 700,
      useNativeDriver: false,
    }).start(() => {
      close();
      xyPos.setValue(getEntryExitValues(entryDirection));
    });
  };

  const getPosition = () => {
    switch (position) {
      case 'top':
        return 'flex-start';
      case 'center':
        return 'center';
      default:
        return 'flex-end';
    }
  };

  const getTopBar = () => {
    return (
      <>
        {(swipeable || closeButton) && (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              flexDirection: 'row',
              height: 25,
              marginVertical: 10,
            }}
          >
            {swipeable && (
              <View
                style={{
                  justifyContent: 'space-between',
                  height: 25,
                  padding: 7,
                  width: 50,
                  // borderWidth: 1,
                  backgroundColor: Colors.font_4,
                }}
                {...panResponder.panHandlers}
              >
                <View
                  style={{
                    borderTopWidth: 1,
                    height: 1,
                    borderColor: Colors.font_1,
                  }}
                />
                <View
                  style={{
                    borderTopWidth: 1,
                    height: 1,
                    borderColor: Colors.font_1,
                  }}
                />
                <View
                  style={{
                    borderTopWidth: 1,
                    height: 1,
                    borderColor: Colors.font_1,
                  }}
                />
              </View>
            )}
            {closeButton && (
              <TouchableOpacity
                onPress={onClose}
                style={{
                  position: 'absolute',
                  right: 0,
                  backgroundColor: Colors.font_4,
                  height: 25,
                  width: 25,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon name="close" size={20} style={{ color: Colors.font_1 }} />
              </TouchableOpacity>
            )}
          </View>
        )}
      </>
    );
  };

  return (
    <>
      {open && (
        <View
          style={{
            // flex: 1,
            justifyContent: getPosition(),
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
              backgroundColor: Colors.white,
              // marginTop: 40,
              // bottom: 0,
              // alignSelf: 'flex-end',
              // height: contentHeight,
              padding: 10,

              // justifyContent: 'flex-end',
              // flex: 1,
              // width: '100%',
              height,
              transform: xyPos.getTranslateTransform(),
              // marginHorizontal: 20,
            }}
          >
            {(position === 'bottom' || position === 'center') && getTopBar()}
            <ScrollView>{children}</ScrollView>
            {position === 'top' && getTopBar()}
          </Animated.View>
        </View>
      )}
    </>
  );
};

Modal.defaultProps = {
  contentHeight: (Dimensions.get('window').height * 3) / 4,
  swipeThreshold: 100,
  position: 'bottom',
};

export default Modal;
