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
    <Button>
      <Text>VINIT</Text>
    </Button>
  </View>
);

const styles = StyleSheet.create({
  // define styles
  container: {
    flex: 1,
    // backgroundColor: 'grey'
  }
});

export default App;
