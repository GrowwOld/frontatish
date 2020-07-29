// example usage of button component
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// eslint-disable-next-line import/no-unresolved
import { Button, useColors, Fonts } from 'supergroww';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ButtonExampleProps {
  isDark: boolean;
  openPopup: () => void;
}

const ButtonExample = (props: ButtonExampleProps) => {
  const { openPopup } = props;
  const Colors = useColors();
  const handlePress = () => {
    // do some action
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <View style={styles.exampleBtnContainer}>
        <Text style={{ color: Colors.font_1, fontSize: Fonts.size.h3 }}>
          Button Examples
        </Text>
        <View style={{ flexDirection: 'row', marginVertical: 20 }}>
          <Button
            type="primary"
            onPress={handlePress}
            label="Primary Button"
            customStyles={{ flex: 1, marginRight: 20 }}
          />
          <Button
            type="secondary"
            onPress={openPopup}
            label="Secondary Button"
            customStyles={{ flex: 1 }}
          />
        </View>
        <View style={{ flexDirection: 'row', marginVertical: 20 }}>
          <Button
            type="default"
            onPress={handlePress}
            label="Default Button"
            customStyles={{ flex: 1, marginRight: 20 }}
          />
          <Button
            type="primary"
            onPress={handlePress}
            label="Disabled button"
            disabled
            customStyles={{ flex: 1 }}
          />
        </View>
        <View style={{ marginVertical: 20 }}>
          <Button
            type="primary"
            onPress={handlePress}
            label="Loading Button"
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
