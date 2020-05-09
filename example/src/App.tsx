import React from 'react';
import { StyleSheet, View } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import { Button } from 'supergroww';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Button label="Primary" type="primary" />
      </View>
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
