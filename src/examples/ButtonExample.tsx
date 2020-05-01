// example usage of button component
import * as React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
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
    <View style={styles.exampleBtnContainer}>
      <View style={{ flexDirection: 'row' }}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  exampleBtnContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    margin: 20,
  },
  exampleBtnText: {},
});

export default ButtonExample;
