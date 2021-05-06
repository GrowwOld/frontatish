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
import { SwipableModalProps } from './types';
import BottomFixedView from '../../ui/BottomFixedView';

const SwipableModal = (props: SwipableModalProps) => {
  const {
    children,
    isOpen,
    hasBackdrop,
    backdropOpacity,
    swipeThreshold,
    swipable,
    componentStyle,
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

  return (
    <Modal
      isVisible={isOpen}
      hasBackdrop={hasBackdrop}
      backdropOpacity={backdropOpacity}
      swipeDirection={swipable ? 'down' : null}
      animationOutTiming={500}
      swipeThreshold={swipeThreshold}
      onSwipeComplete={onSwipeComplete}
      onBackdropPress={onBackdropPress}
      onBackButtonPress={onBackButtonPress}
      propagateSwipe
      style={{
        margin: 0,
      }}
      scrollTo={handleScrollTo}
      scrollOffset={scrollOffset}
      scrollOffsetMax={500}
    >
      <BottomFixedView>
        <View style={[styles.container, componentStyle]}>
          {swipable ? (
            <View style={styles.topBar}>
              <View style={{ width: 32 }} />
              <View
                style={{
                  borderWidth: 1,
                  width: 50,
                }}
              />
              <Ripple
                style={styles.closeButton}
                rippleContainerBorderRadius={16}
                onPress={onCloseButtonPress}
              >
                <IonIcon name="ios-close" size={24} />
              </Ripple>
            </View>
          ) : null}
          <View style={[styles.contentView, { marginTop: swipable ? 10 : 20 }]}>
            <ScrollView
              ref={scrollViewRef}
              onScroll={handleOnScroll}
              scrollEventThrottle={16}
              showsVerticalScrollIndicator={false}
            >
              {children}
            </ScrollView>
          </View>
        </View>
      </BottomFixedView>
    </Modal>
  );
};

SwipableModal.defaultProps = {
  hasBackDrop: true,
  backdropOpacity: 0.7,
  swipeThreshold: Dimensions.get('window').height / 5,
  swipable: true,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 4,
    maxHeight: (Dimensions.get('window').height * 3) / 4,
    minHeight: Dimensions.get('window').height / 3,
  },
  topBar: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  closeButton: {
    height: 32,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  contentView: {
    marginHorizontal: 20,
    marginBottom: 50,
  },
});
export default SwipableModal;
