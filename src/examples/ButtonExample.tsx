// example usage of button component
import * as React from 'react';
import { Alert, StyleSheet, View, Text } from 'react-native';
import { Button } from '../components';
import { Fonts, getColors } from '../styles';

interface ButtonExampleProps {
  isDark: boolean;
  openPopup: () => void;
}

const ButtonExample = (props: ButtonExampleProps) => {
  const { isDark, openPopup } = props;
  const Colors = getColors(isDark);
  const handlePress = () => {
    Alert.alert('Just checking onPress');
  };
  return (
    <View style={styles.exampleBtnContainer}>
      <Text style={[Fonts.style.h4, { color: Colors.BLACK }]}>
        Button Examples
      </Text>
      <View style={{ flexDirection: 'row', marginVertical: 20 }}>
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
      <View style={{ flexDirection: 'row', marginVertical: 20 }}>
        <Button
          type="default"
          onPress={handlePress}
          label="Default Button"
          isDark={isDark}
          customStyles={{ flex: 1, marginRight: 20 }}
        />
        <Button
          type="primary"
          onPress={handlePress}
          label="Disabled button"
          isDark={isDark}
          disabled
          customStyles={{ flex: 1 }}
        />
      </View>
      <View style={{ marginVertical: 20 }}>
        <Button
          type="primary"
          onPress={handlePress}
          label="Loading Button"
          isDark={isDark}
          loading
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  exampleBtnContainer: {
    flex: 1,
    // justifyContent: 'space-evenly',
    margin: 20,
  },
  exampleBtnText: {},
});

export default ButtonExample;
