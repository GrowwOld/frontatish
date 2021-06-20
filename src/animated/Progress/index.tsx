import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { ColorType } from '../../common/types';
import { withColors } from '../../themes';

interface ProgressProps {
  width: number;
  Colors: ColorType;
  barColor?: string;
}

interface ProgressState {
  transX: Animated.Value;
}
class Progress extends React.Component<ProgressProps, ProgressState> {
  constructor(props: ProgressProps) {
    super(props);
    this.state = {
      transX: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.startAnimation();
  }

  startAnimation = () => {
    const { transX } = this.state;
    Animated.loop(
      Animated.sequence([
        Animated.timing(transX, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(transX, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  render() {
    const { width, barColor, Colors } = this.props;
    const { transX } = this.state;
    const styles = getStyles(Colors, barColor, width);
    return (
      <View style={[styles.progressContainer]}>
        <Animated.View
          style={[
            styles.progressBar,
            {
              transform: [
                {
                  translateX: transX.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, width - width / 4 - 5],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            },
          ]}
        />
      </View>
    );
  }
}

const getStyles = (
  Colors: ColorType,
  barColor: string | undefined,
  width: number,
) => {
  return StyleSheet.create({
    progressContainer: {
      padding: 2,
      height: 4,
      width,
    },
    progressBar: {
      width: width / 4,
      padding: 2,
      borderRadius: 4,
      backgroundColor: barColor || Colors.white,
    },
  });
};

export default withColors(Progress);
