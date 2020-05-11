import React from 'react';
import { Animated } from 'react-native';
import { FadeProps } from './types';

class Fade extends React.PureComponent<FadeProps> {
  animatedOpacity = new Animated.Value(0);

  componentDidUpdate() {
    const { visible } = this.props;
    Animated.timing(this.animatedOpacity, {
      toValue: visible ? 1 : 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }

  render() {
    const { children, containerStyle } = this.props;
    return (
      <Animated.View
        style={{ ...containerStyle, opacity: this.animatedOpacity }}
      >
        {children}
      </Animated.View>
    );
  }
}

export default Fade;
