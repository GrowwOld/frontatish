import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
// import { Button } from 'supergroww';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome Example APP</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
