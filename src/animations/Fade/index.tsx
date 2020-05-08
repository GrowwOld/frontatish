import React from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
// import { FadeProps } from './types';
// import { getColors } from '../../styles';

// const Fade = (props: FadeProps) => {
//   const { isDark } = props;
//   const Colors = getColors(isDark);
//   return (
//     <View>
//       <Text style={{ color: Colors.BLACK }}>Fade</Text>
//     </View>
//   );
// };

// export default Fade;
const Fade = () => {
  // const { isDark } = props;
  // const Colors = getColors(isDark);
  const animatedValue = new Animated.Value(-300);

  const startAnimation = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 4000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Text onPress={startAnimation}>Start animation</Text>
      <View style={styles.loadBar}>
        <Animated.View
          style={[
            styles.loadAmount,
            { transform: [{ translateX: animatedValue }] },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#333',
  },
  loadBar: {
    width: 300,
    height: 40,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  loadAmount: {
    position: 'absolute',
    width: 300,
    height: 40,
    backgroundColor: 'red',
  },
});

export default Fade;
