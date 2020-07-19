import React from 'react';
import { Animated, Text } from 'react-native';

interface TickProps {
  value: string;
  height: number;
  styles: any;
}
const numberRange = Array(10)
  .fill('')
  .map((_x, i) => i);

const getPosition = (value: string, height: number) =>
  parseInt(value, 10) * height * -1;
const getTranslateStyle = (position: Animated.Value) => {
  // console.log('Called with position',position);
  return { transform: [{ translateY: position }] };
};
class Tick extends React.PureComponent<TickProps> {
  animation: Animated.Value;

  constructor(props: TickProps) {
    super(props);
    const { value, height } = this.props;
    this.animation = new Animated.Value(getPosition(value, height));
  }

  componentDidUpdate(prevProps: TickProps) {
    // on the first mount the position will be 0,since height is not measured and its val
    // -ue is 0,so that's why on intial render all ticker will point to 0,so as soon as
    // we get the updated height we again translate to update the value in the view.
    const { value, height } = this.props;
    if (value !== prevProps.value || height !== prevProps.height) {
      const toValue = getPosition(value, height);
      Animated.timing(this.animation, {
        toValue,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }

  render() {
    const { styles } = this.props;
    const transformStyle = getTranslateStyle(this.animation);
    return (
      <Animated.View style={[transformStyle]}>
        {numberRange.map((v) => {
          return (
            <Text key={v} style={styles.text}>
              {v}
            </Text>
          );
        })}
      </Animated.View>
    );
  }
}

export default Tick;
