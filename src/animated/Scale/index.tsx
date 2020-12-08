import React, { ReactNode } from 'react';
import { Animated } from 'react-native';

interface ScaleProps {
  children: ReactNode;
}

interface ScaleState {
  animatedScale: Animated.Value;
}

class Scale extends React.PureComponent<ScaleProps, ScaleState> {
  constructor(props: ScaleProps) {
    super(props);
    this.state = { animatedScale: new Animated.Value(0) };
  }

  componentDidMount() {
    // run Animation
    const { animatedScale } = this.state;
    Animated.timing(animatedScale, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }

  componentDidUpdate(prevProps) {
    console.log('this.props', this.props, prevProps);
  }

  render() {
    const { children } = this.props;
    const { animatedScale } = this.state;
    return (
      <Animated.View style={{ transform: [{ scale: animatedScale }] }}>
        {children}
      </Animated.View>
    );
  }
}

export default Scale;
