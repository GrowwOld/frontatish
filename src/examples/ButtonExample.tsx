// example usage of button component
import * as React from 'react';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import { Button } from '../components';

interface ButtonExampleProps {
  isDark: boolean;
  openPopup: () => void;
}

const ButtonExample = (props: ButtonExampleProps) => {
  const { isDark, openPopup } = props;
  const handlePress = () => {
    Alert.alert('Just checking onPress');
  };
  return (
    <ScrollView contentContainerStyle={styles.exampleBtnContainer}>
      <View style={{ flexDirection: 'row', margin: 20 }}>
        <Button
          type="primary"
          onPress={handlePress}
          label="Primary Button"
          isDark={isDark}
          customStyles={{ flex: 1, marginRight: 20 }}
        />
        <Button
          type="secondary"
          onPress={openPopup}
          label="Secondary Button"
          isDark={isDark}
          customStyles={{ flex: 1 }}
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
    justifyContent: 'space-evenly',
  },
  exampleBtnText: {},
});

export default ButtonExample;
