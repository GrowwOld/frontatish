import React, { ReactNode } from 'react';
import { Animated } from 'react-native';

interface ScaleProps {
  children: ReactNode;
  scale: boolean;
}

interface ScaleState {
  animatedScale: Animated.Value;
}

class Scale extends React.PureComponent<ScaleProps, ScaleState> {
  animatedScale: Animated.Value;

  constructor(props: ScaleProps) {
    super(props);
    this.animatedScale = new Animated.Value(0);
  }

  componentDidMount() {
    const { scale } = this.props;
    if (scale) {
      Animated.timing(this.animatedScale, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }

  componentDidUpdate(prevProps: ScaleProps) {
    const { scale } = this.props;
    // start animation only if prev props scale is not
    // equals to current scale props
    if (prevProps.scale !== scale) {
      // if we have to scale down
      // the animate to 0 else animate to 1
      if (!scale) {
        Animated.timing(this.animatedScale, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        Animated.timing(this.animatedScale, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    }
  }

  render() {
    const { children } = this.props;
    return (
      <Animated.View style={{ transform: [{ scale: this.animatedScale }] }}>
        {children}
      </Animated.View>
    );
  }
}

export default Scale;
