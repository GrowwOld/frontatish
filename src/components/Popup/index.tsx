import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import Modal from 'react-native-modal';
import { PopupProps, PopupState } from './types';
import { AlignTypes } from '../../common/types';
import { getColors } from '../../styles';

let Colors: any;
export default class Popup extends Component<PopupProps, PopupState> {
  onSwipeComplete = (siwpeObj: any) => {
    const { swipingDirection } = siwpeObj;
    const { closePopup } = this.props;
    if (swipingDirection === 'down') {
      closePopup();
    } else {
      // need to do something on scroll
      // up
    }
  };

  // onSwipeMove = (percentageShown) => {
  //   console.log("precentage show", percentageShown);
  // }
  getPosition = (position?: string): AlignTypes => {
    switch (position) {
      case 'bottom':
        return 'flex-end';
      case 'top':
        return 'flex-start';
      default:
        return 'center';
    }
  };

  renderSwipeIndicator = () => (
    <View style={{ alignItems: 'center' }}>
      <View
        style={{
          marginTop: 10,
          marginBottom: 20,
          backgroundColor: Colors.SILVER,
          height: 4,
          width: 60,
          borderRadius: 4,
        }}
      />
    </View>
  );

  render() {
    const {
      isOpen,
      isDark,
      position,
      closePopup,
      children,
      swipeDirection,
    } = this.props;
    Colors = getColors(isDark);
    const childrenContainerStyle = { backgroundColor: Colors.WHITE };
    return (
      <View style={{ flex: 1 }}>
        <Modal
          isVisible={isOpen}
          swipeDirection={swipeDirection}
          onBackdropPress={closePopup}
          onBackButtonPress={closePopup}
          // scrollOffset={30}
          swipeThreshold={30}
          onSwipeComplete={this.onSwipeComplete}
          // onSwipeMove={this.onSwipeMove}
          style={{
            margin: 0,
            justifyContent: this.getPosition(position),
          }}
          // hideModalContentWhileAnimating
        >
          <SafeAreaView style={childrenContainerStyle}>
            {swipeDirection && this.renderSwipeIndicator()}
            {children}
          </SafeAreaView>
        </Modal>
      </View>
    );
  }
}

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
