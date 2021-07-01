// example usage of button component
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// eslint-disable-next-line import/no-unresolved
import { InfoBox, useColors, Fonts } from 'frontatish';
import { SafeAreaView } from 'react-native-safe-area-context';

const ButtonExample = () => {
  const Colors = useColors();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <View style={styles.exampleBtnContainer}>
        <Text style={{ color: Colors.font_1, fontSize: Fonts.size.h3 }}>
          InfoBox Examples
        </Text>
        <InfoBox label="Default" backgroundColor="error" />
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
