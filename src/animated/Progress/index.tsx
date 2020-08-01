import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { ColorType } from '../../common/types';
import { withColors } from '../../themes';

interface ProgeessProps {
  width: number;
  Colors: ColorType;
}

interface ProgressState {
  transX: Animated.Value;
}
class Progress extends React.Component<ProgeessProps, ProgressState> {
  constructor(props: ProgeessProps) {
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
      Animated.timing(transX, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
    ).start();
  };

  render() {
    const { width, Colors } = this.props;
    const { transX } = this.state;
    const styles = getStyles(Colors, width);
    return (
      <View style={[styles.progressContainer, { width }]}>
        <Animated.View
          style={[
            styles.progressBar,
            {
              transform: [
                {
                  translateX: transX.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-100, width],
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

const getStyles = (Colors: ColorType, width: number) => {
  return StyleSheet.create({
    progressContainer: {
      backgroundColor: Colors.primary_attr_40,
      borderRadius: 4,
      height: 4,
      width,
    },
    progressBar: {
      width: width / 4,
      padding: 2,
      backgroundColor: Colors.white,
    },
  });
};

export default withColors(Progress);
