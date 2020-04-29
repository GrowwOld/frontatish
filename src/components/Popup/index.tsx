import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, SafeAreaView, Dimensions, Animated, Easing } from 'react-native';
import Modal from 'react-native-modal';

const { height: screenHeight } = Dimensions.get('window');
export default class ModalTester extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      fake: false,
      fullScreen: false,
      pan: new Animated.ValueXY({ x: 0, y: 50 })
    };
  }

  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  toggleFake = () => {
    this.setState({
      fake: !this.state.fake
    });
  }

  onSwipeComplete = ({ swipingDirection }) => {
    if (swipingDirection === 'down') {
      this.setState({ isOpen: false });
      this.setState({ fullScreen: false });
    }
    else {
      const TIMING_CONFIG = { duration: 300, easing: Easing.inOut(Easing.ease) };
      Animated.timing(this.state.pan, {
        ...TIMING_CONFIG,
        toValue: { x: 0, y: screenHeight },
        useNativeDriver: true,
      }).start();
    }
  }

  // onSwipeMove = (percentageShown) => {
  //   console.log("precentage show", percentageShown);
  // }

  render() {
    const { isOpen, fake, fullScreen } = this.state;
    console.log(this.state.pan.y);
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
            <Animated.View style={[styles.bottomFixed, { height: this.state.pan.height}]}>
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
    backgroundColor: '#fff'
  },
  bottomFixed: {
    // flex: 1,
    // backgroundColor: '#fff'
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff'
  }
});
