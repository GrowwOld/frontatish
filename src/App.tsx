/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';

import ButtonExample from './examples/ButtonExample';


const App = () => (
  <View style={styles.container}>
    <ButtonExample />
  </View>
);

const styles = StyleSheet.create({
  // define styles
  container: {
    // flex: 1,
    margin: 20,
    // backgroundColor: 'grey'
  },
  buttonContainer: {
  }
});

export default App;
