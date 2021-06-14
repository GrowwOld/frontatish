import React, { useState, useRef } from 'react';
import {
  View,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Modalbox from 'react-native-modal';

// eslint-disable-next-line import/no-unresolved
import IonIcon from 'react-native-vector-icons/Ionicons';
import Ripple from 'react-native-material-ripple';
import { ModalProps } from './types';
import { useColors } from '../../themes';
import { BottomFixedView } from '../../ui';

const Modal = (props: ModalProps) => {
  const {
    children,
    isOpen,
    hasBackdrop,
    backdropOpacity,
    swipeThreshold,
    swipeable,
    componentStyle,
    centerPositioned,
    onSwipeComplete,
    onBackButtonPress,
    onBackdropPress,
    onCloseButtonPress,
  } = props;

  const Colors = useColors();

  const [scrollOffset, setScrollOffset] = useState(0);

  const scrollViewRef = useRef<ScrollView>(null);

  const handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setScrollOffset(event.nativeEvent.contentOffset.y);
  };
  const handleScrollTo = (p: number) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo(p);
    }
  };

  const getModalContent = () => {
    return (
      <View
        style={[
          styles.container,
          componentStyle,
          { backgroundColor: Colors.white },
        ]}
      >
        <View style={styles.topBar}>
          {swipeable && !centerPositioned ? (
            <View style={styles.swipeLine} />
          ) : null}
          {onCloseButtonPress ? (
            <Ripple
              style={styles.closeButton}
              rippleContainerBorderRadius={16}
              onPress={onCloseButtonPress}
            >
              <IonIcon name="ios-close" size={24} />
            </Ripple>
          ) : null}
        </View>
        <>
          <ScrollView
            ref={scrollViewRef}
            onScroll={handleOnScroll}
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
          >
            {children}
          </ScrollView>
        </>
      </View>
    );
  };

  return (
    <View style={styles.flex_1}>
      <Modalbox
        isVisible={isOpen}
        hasBackdrop={hasBackdrop}
        backdropOpacity={backdropOpacity}
        swipeDirection={centerPositioned || !swipeable ? [] : 'down'}
        animationOutTiming={500}
        swipeThreshold={swipeThreshold}
        onSwipeComplete={onSwipeComplete}
        onBackdropPress={onBackdropPress}
        onBackButtonPress={onBackButtonPress}
        propagateSwipe
        style={styles.margin_0}
        scrollTo={handleScrollTo}
        scrollOffset={scrollOffset}
        scrollOffsetMax={500}
      >
        {centerPositioned ? (
          getModalContent()
        ) : (
          <BottomFixedView>{getModalContent()}</BottomFixedView>
        )}
      </Modalbox>
    </View>
  );
};

Modal.defaultProps = {
  hasBackdrop: true,
  backdropOpacity: 0.7,
  swipeThreshold: 100,
  swipeable: true,
  centerPositioned: false,
};

const styles = StyleSheet.create({
  flex_1: { flex: 1 },
  container: {
    borderRadius: 4,
    maxHeight: Dimensions.get('window').height,
    paddingHorizontal: 15,
    paddingBottom: 5,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 32,
  },
  swipeLine: {
    borderWidth: 1,
    width: 50,
    height: 1,
    alignSelf: 'center',
  },
  closeButton: {
    height: 32,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
  },
  margin_0: {
    margin: 0,
  },
});
export default Modal;
