import React from 'react';
import { View, SafeAreaView } from 'react-native';
import Modal from 'react-native-modal';
import { PopupProps } from './types';
import { AlignTypes } from '../../common/types';
import { getColors } from '../../styles';

let Colors: any;
const Popup = (props: PopupProps) => {
  // constructor(props: PopupProps) {
  //   super(props);
  //   this.state = { flexValue: 0 };
  // }
  const onSwipeComplete = (siwpeObj: any) => {
    const { swipingDirection } = siwpeObj;
    const { closePopup } = props;
    if (swipingDirection === 'down') {
      closePopup();
    } else {
      // need to do something on scroll
      // up
    }
  };

  const onSwipeMove = (percentageShown: number) => {
    const fixedPercentage: number = parseFloat(percentageShown.toFixed(1));
    const updateFlexValue: number = parseFloat(
      (1 - fixedPercentage).toFixed(1),
    );
    console.log('flexValue', updateFlexValue, 'percentage', fixedPercentage);
    // this.setState({ flexValue: updateFlexValue });
  };

  const getPosition = (position?: string): AlignTypes => {
    switch (position) {
      case 'bottom':
        return 'flex-end';
      case 'top':
        return 'flex-start';
      default:
        return 'center';
    }
  };

  const renderSwipeIndicator = () => (
    <View style={{ alignItems: 'center' }}>
      <View
        style={{
          marginTop: 10,
          marginBottom: 20,
          backgroundColor: Colors.LIGHTER_GREY,
          height: 4,
          width: 60,
          borderRadius: 4,
        }}
      />
    </View>
  );
  const {
    animationIn,
    animationInTiming,
    animationOut,
    animationOutTiming,
    avoidKeyboard,
    coverScreen,
    hasBackdrop,
    backdropColor,
    backdropOpacity,
    backdropTransitionInTiming,
    backdropTransitionOutTiming,
    children,
    childrenContainerStyle,
    customBackdrop,
    deviceHeight: deviceHeightProp,
    deviceWidth: deviceWidthProp,
    // custom props for opening and hanling dark mode
    isOpen,
    isDark,
    onModalShow,
    // custom props for positioning
    position,
    closePopup,
    swipeDirection,
    scrollOffset,
    swipeThreshold,
  } = props;
  Colors = getColors(isDark);
  // console.log('flexVAlue is', flexValue);
  return (
    <Modal
      animationIn={animationIn}
      animationInTiming={animationInTiming}
      animationOut={animationOut}
      animationOutTiming={animationOutTiming}
      avoidKeyboard={avoidKeyboard}
      coverScreen={coverScreen}
      hasBackdrop={hasBackdrop}
      backdropColor={backdropColor}
      backdropOpacity={backdropOpacity}
      backdropTransitionInTiming={backdropTransitionInTiming}
      backdropTransitionOutTiming={backdropTransitionOutTiming}
      customBackdrop={customBackdrop}
      // children={children}
      deviceHeight={deviceHeightProp}
      deviceWidth={deviceWidthProp}
      isVisible={isOpen}
      onModalShow={onModalShow}
      onBackdropPress={closePopup}
      onBackButtonPress={closePopup}
      onSwipeComplete={onSwipeComplete}
      onSwipeMove={onSwipeMove}
      swipeDirection={swipeDirection}
      scrollOffset={scrollOffset}
      swipeThreshold={swipeThreshold}
      style={{
        margin: 0,
        // flex: 1,
        justifyContent: getPosition(position),
      }}
      // hideModalContentWhileAnimating
    >
      <SafeAreaView style={childrenContainerStyle}>
        {swipeDirection && renderSwipeIndicator()}
        {children}
      </SafeAreaView>
    </Modal>
  );
};

Popup.defaultProps = {
  animationIn: 'slideInUp',
  animationInTiming: 300,
  animationOut: 'slideOutDown',
  animationOutTiming: 300,
  avoidKeyboard: false,
  coverScreen: true,
  hasBackdrop: true,
  backdropColor: 'black',
  backdropOpacity: 0.7,
  backdropTransitionInTiming: 300,
  backdropTransitionOutTiming: 300,
  customBackdrop: null,
  useNativeDriver: false,
  deviceHeight: null,
  deviceWidth: null,
  hideModalContentWhileAnimating: false,
  propagateSwipe: false,
  isVisible: false,
  onModalShow: () => null,
  onModalWillShow: () => null,
  onModalHide: () => null,
  onModalWillHide: () => null,
  onBackdropPress: () => null,
  onBackButtonPress: () => null,
  swipeThreshold: 100,
  scrollTo: null,
  scrollOffset: 0,
  scrollOffsetMax: 0,
  scrollHorizontal: false,
  supportedOrientations: ['portrait', 'landscape'],
};

export default Popup;
// const styles = StyleSheet.create({
//   fullScreen: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   bottomFixed: {
//     // backgroundColor: '#fff'
//     // position: 'absolute',
//     // bottom: 0,
//     // width: '100%',
//     backgroundColor: '#fff',
//   },
// });
