import React, { useState, useRef } from 'react';
import {
  View,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';

// eslint-disable-next-line import/no-unresolved
import IonIcon from 'react-native-vector-icons/Ionicons';
import Ripple from 'react-native-material-ripple';
import { SwipableModalProps } from './types';
import { useColors } from '../../themes';
import BottomFixedView from '../../ui/BottomFixedView';

const SwipableModal = (props: SwipableModalProps) => {
  const Colors = useColors();
  const { children, isOpen, closeModal } = props;

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
      backdropOpacity={0.3}
      swipeDirection="down"
      animationOutTiming={500}
      swipeThreshold={Dimensions.get('window').height / 8}
      onSwipeComplete={closeModal}
      onBackdropPress={closeModal}
      onBackButtonPress={closeModal}
      propagateSwipe
      coverScreen
      style={{
        margin: 0,
      }}
      scrollTo={handleScrollTo}
      scrollOffset={scrollOffset}
      scrollOffsetMax={500}
    >
      <BottomFixedView>
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.white,
            borderRadius: 4,
            bottom: 0,
            position: 'absolute',
            width: '100%',
            maxHeight: (Dimensions.get('window').height * 3) / 4,
            minHeight: Dimensions.get('window').height / 3,
          }}
        >
          <View
            style={{
              paddingHorizontal: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              // backgroundColor: Colors.font_6,
            }}
          >
            <View style={{ width: 32 }} />
            <View
              style={{
                borderWidth: 1,
                width: 50,
              }}
            />
            <Ripple
              style={{
                height: 32,
                width: 32,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
              }}
              rippleContainerBorderRadius={16}
              onPress={closeModal}
            >
              <IonIcon
                name="ios-close"
                size={24}
                // style={{ flex: 1, textAlign: 'center' }}
              />
            </Ripple>
          </View>
          <View
            style={{
              marginHorizontal: 20,
              marginTop: 10,
              marginBottom: 50,
            }}
          >
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
export default SwipableModal;
