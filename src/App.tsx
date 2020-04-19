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
import { Text, View, StyleSheet } from 'react-native';

// common components
import { Button } from './components';

const App = () => (
  <View style={styles.container}>
    <View style={styles.buttonContainer}>
      <Button type="primary">
        <Text>VINIT</Text>
      </Button>
      <Button type="secondary">
        <Text>VINIT</Text>
      </Button>
      <Button type="tertiary">
        <Text>VINIT</Text>
      </Button>
      <Button type="link">
        <Text>VINIT</Text>
      </Button>
    </View>
  </View>
);

const styles = StyleSheet.create({
  // define styles
  container: {
    // flex: 1,
    // backgroundColor: 'grey'
  },
  buttonContainer: {
  }
});

export default App;
