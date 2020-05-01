import React, { Component } from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import Modal from 'react-native-modal';
import { PopupProps, PopupState } from './types';

const { height: screenHeight } = Dimensions.get('window');
export default class ModalTester extends Component<PopupProps, PopupState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isOpen: false,
      fake: false,
      pan: new Animated.ValueXY({ x: 0, y: 50 }),
    };
  }

  toggleModal = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  toggleFake = () => {
    this.setState((prevState) => ({ fake: !prevState.fake }));
  };

  onSwipeComplete = (siwpeObj: any) => {
    const { swipingDirection } = siwpeObj;
    const { pan } = this.state;
    if (swipingDirection === 'down') {
      this.setState({ isOpen: false });
    } else {
      const TIMING_CONFIG = {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      };
      Animated.timing(pan, {
        ...TIMING_CONFIG,
        toValue: { x: 0, y: screenHeight },
        useNativeDriver: true,
      }).start();
    }
  };

  // onSwipeMove = (percentageShown) => {
  //   console.log("precentage show", percentageShown);
  // }

  render() {
    const { isOpen, fake, pan } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Button title="Show modal" onPress={this.toggleModal} />
        <Modal
          isVisible={isOpen}
          swipeDirection={['up', 'down']}
          // scrollOffset={30}
          swipeThreshold={30}
          onSwipeComplete={this.onSwipeComplete}
          // onSwipeMove={this.onSwipeMove}
          style={{ margin: 0 }}
          // hideModalContentWhileAnimating
        >
          {/* <SafeAreaView> */}
          <Animated.View style={[styles.bottomFixed, { height: pan.height }]}>
            <Text>Hello!</Text>
            <Button title="Hide modal" onPress={this.toggleModal} />
            <Button title="Fake output" onPress={this.toggleFake} />
            {fake && (
              <View>
                <Text>Vinit</Text>
                <Text>Vinit</Text>
                <Text>Vinit</Text>
                <Text>Vinit</Text>
                <Text>Vinit</Text>
                <Text>Vinit</Text>
                <Text>Vinit</Text>
                <Text>Vinit</Text>
                <Text>Vinit</Text>
              </View>
            )}
          </Animated.View>
          {/* </SafeAreaView> */}
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bottomFixed: {
    // flex: 1,
    // backgroundColor: '#fff'
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
  },
});
