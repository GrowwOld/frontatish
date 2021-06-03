import React, { useState, useRef } from 'react';
import {
  View,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';

// eslint-disable-next-line import/no-unresolved
import IonIcon from 'react-native-vector-icons/Ionicons';
import Ripple from 'react-native-material-ripple';
import { SwipeableModalProps } from './types';
import { BottomFixedView, CenteredView } from '../../ui';

const SwipeableModal = (props: SwipeableModalProps) => {
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

  const modalContent = () => {
    return (
      <View style={[styles.container, componentStyle]}>
        {swipeable && !centerPositioned ? (
          <View style={styles.topBar}>
            <View style={styles.emptyView} />
            <View style={styles.swipeLine} />
            <Ripple
              style={styles.closeButton}
              rippleContainerBorderRadius={16}
              onPress={onCloseButtonPress}
            >
              <IonIcon name="ios-close" size={24} />
            </Ripple>
          </View>
        ) : null}
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
    <Modal
      isVisible={isOpen}
      hasBackdrop={hasBackdrop}
      backdropOpacity={backdropOpacity}
      swipeDirection="down"
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
        <CenteredView>{modalContent()}</CenteredView>
      ) : (
        <BottomFixedView>{modalContent()}</BottomFixedView>
      )}
    </Modal>
  );
};

SwipeableModal.defaultProps = {
  hasBackdrop: true,
  backdropOpacity: 0.7,
  swipeThreshold: 100,
  swipeable: true,
  centerPositioned: false,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 4,
    maxHeight: Dimensions.get('window').height,
    paddingBottom: 40,
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  topBar: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  emptyView: { width: 32 },
  swipeLine: {
    borderWidth: 1,
    width: 50,
  },
  closeButton: {
    height: 32,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  margin_0: {
    margin: 0,
  },
});
export default SwipeableModal;
