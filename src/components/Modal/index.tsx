/* eslint-disable no-underscore-dangle */
import React, { useRef } from 'react';
import {
  View,
  Animated,
  TouchableOpacity,
  Dimensions,
  PanResponder,
  ScrollView,
  TouchableWithoutFeedback,
  BackHandler,
  StyleSheet,
} from 'react-native';
// eslint-disable-next-line import/no-unresolved
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useColors } from '../../index';
import { ModalProps } from './types';

const getEntryExitValues = (direction: string | undefined) => {
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

const DIST_BTW_BAR_AND_TOP = 25;

const getHeightValue = (yPos: number, position: string | undefined) => {
  if (position === 'top') {
    return yPos + DIST_BTW_BAR_AND_TOP;
  }
  return Dimensions.get('window').height - yPos + DIST_BTW_BAR_AND_TOP;
};

const getPosition = (position: string | undefined) => {
  switch (position) {
    case 'top':
      return 'flex-start';
    case 'center':
      return 'center';
    default:
      return 'flex-end';
  }
};

const Modal = (props: ModalProps) => {
  const Colors = useColors();
  const {
    open,
    onModalClose,
    children,
    contentHeight,
    animationInTiming,
    animationOutTiming,
    swipeThreshold,
    position,
    entryDirection,
    exitDirection,
    swipeable,
    hasCloseButton,
    onModalShow,
    closeButtonStyle,
    style,
    hasBackdrop,
    backdropColor,
    backdropOpacity,
    onBackdropPressClose,
    onBackButtonPressClose,
  } = props;

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
        height.setValue(getHeightValue(gestureState.y0, position));
      },
      onPanResponderMove: (_, gestureState) => {
        // The most recent move distance is gestureState.move{X,Y}
        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}

        height.setValue(getHeightValue(gestureState.moveY, position));
      },
      onPanResponderTerminationRequest: () => true,
      onPanResponderRelease: (_, gestureState) => {
        const dy = position === 'top' ? gestureState.dy : -gestureState.dy;

        if (dy > swipeThreshold && !fullHeight.current) {
          toFullHeight();
        } else if (-dy > swipeThreshold && height._value > contentHeight) {
          toContentHeight();
        } else if (-dy > swipeThreshold && height._value < contentHeight) {
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
    BackHandler.addEventListener('hardwareBackPress', onBackButtonPress);
    Animated.timing(xyPos, {
      toValue: { x: 0, y: 0 },
      duration: animationInTiming,
      useNativeDriver: false,
    }).start(() => onModalShow());
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
      toValue: getEntryExitValues(exitDirection),
      duration: animationOutTiming,
      useNativeDriver: false,
    }).start(() => {
      onModalClose();
      xyPos.setValue(getEntryExitValues(entryDirection));
      BackHandler.removeEventListener('hardwareBackPress', onBackButtonPress);
    });
  };

  const onBackButtonPress = () => {
    if (onBackButtonPressClose && open) {
      onClose();
      return true;
    }
    return false;
  };

  const getTopBar = () => {
    return (
      <>
        {(swipeable || hasCloseButton) && (
          <View style={styles.topBar}>
            {swipeable && (
              <View
                style={[
                  styles.swipeView,
                  {
                    backgroundColor: Colors.font_4,
                  },
                ]}
                {...panResponder.panHandlers}
              >
                <Icon name="menu" size={25} style={{ color: Colors.font_2 }} />
              </View>
            )}
            {hasCloseButton && (
              <TouchableOpacity
                onPress={onClose}
                style={[styles.closeButton, closeButtonStyle]}
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
          style={[
            { justifyContent: getPosition(position) },
            styles.containerView,
          ]}
          onLayout={onOpen}
        >
          {hasBackdrop && (
            <TouchableWithoutFeedback
              onPress={onBackdropPressClose ? onClose : undefined}
            >
              <View
                style={[
                  styles.backdrop,
                  {
                    opacity: backdropOpacity,
                    backgroundColor: backdropColor,
                  },
                ]}
              />
            </TouchableWithoutFeedback>
          )}
          <Animated.View
            style={[
              {
                backgroundColor: Colors.white,
                height,
                transform: xyPos.getTranslateTransform(),
              },
              style,
            ]}
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
  entryDirection: 'down',
  onModalShow: () => {},
  hasBackdrop: true,
  backdropOpacity: 0.7,
  backdropColor: 'black',
  onBackdropPressClose: false,
  swipeable: false,
  hasCloseButton: false,
  animationInTiming: 700,
  animationOutTiming: 700,
};

const styles = StyleSheet.create({
  backdrop: { position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 },
  containerView: {
    width: '100%',
    height: Dimensions.get('window').height,
    position: 'absolute',
    zIndex: 1,
  },
  closeButton: {
    position: 'absolute',
    right: 0,
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  swipeView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
  },
  topBar: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    height: 25,
    marginVertical: 10,
  },
});

export default Modal;
