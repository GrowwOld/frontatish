// example usage of button component
import * as React from 'react';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import { Button } from '../components';

interface ButtonExampleProps {
  isDark: boolean
}

const ButtonExample = (props: ButtonExampleProps) => {
  const { isDark } = props;
  const handlePress = () => {
    Alert.alert(
      'Just checking onPress',
    );
  };
  return (
    <ScrollView contentContainerStyle={styles.exampleBtnContainer}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Button
          type="primary"
          onPress={handlePress}
          label="Primary Button"
          isDark={isDark}
        />
        <Button
          type="secondary"
          onPress={handlePress}
          label="Secondary Button"
          isDark={isDark}
        />
      </View>
      <Button
        type="default"
        onPress={handlePress}
        label="Default Button"
        isDark={isDark}
      />
      <Button
        type="primary"
        onPress={handlePress}
        label="Loading Button"
        isDark={isDark}
        loading
      />
      <Button
        type="primary"
        onPress={handlePress}
        label="Disabled button"
        isDark={isDark}
        disabled
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  exampleBtnContainer: {
    flex: 1,
    justifyContent: 'space-between'
  },
  exampleBtnText: {}
});

export default ButtonExample;
