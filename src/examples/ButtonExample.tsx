// example usage of button component
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '../components';

const ButtonExample = () => (
  <View style={styles.exampleBtnContainer}>
    <Button
      type="primary"
      onPress={null}
      label="Primary Button"
    />
    <Button
      type="secondary"
      onPress={null}
      label="Secondary Button"
    />
    <Button
      type="tertiary"
      onPress={null}
      label="Tertiary Button"
    />
  </View>
);

const styles = StyleSheet.create({
  exampleBtnContainer: {
    //
  },
  exampleBtnText: {
    //
  }
});

export default ButtonExample;
