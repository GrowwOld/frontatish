// example usage of button component
import * as React from 'react';
import { Alert, StyleSheet, View, Text } from 'react-native';

// eslint-disable-next-line import/no-unresolved
import { Button } from 'supergroww';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { Fonts, getColors } from '../styles';

interface ButtonExampleProps {
  isDark: boolean;
  openPopup: () => void;
}

const ButtonExample = (props: ButtonExampleProps) => {
  const { isDark, openPopup } = props;
  // const Colors = getColors(isDark);
  const handlePress = () => {
    Alert.alert('Just checking onPress');
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.exampleBtnContainer}>
        <Text style={[]}>Button Examples</Text>
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
    </SafeAreaView>
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
