/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import ButtonExample from './examples/ButtonExample';
import NumPadExample from './examples/NumPadExample';
import { getColors } from './styles';
import { Button } from './components';


const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const Colors = getColors(darkMode);
  return (
    <View style={[styles.container, { backgroundColor: Colors.WHITE }]}>

      <ButtonExample isDark={darkMode} />
      <NumPadExample isDark={darkMode} />
      <Button
        label="Change Theme"
        isDark={darkMode}
        onPress={() => setDarkMode(!darkMode)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // define styles
  container: {
    flex: 1,
  },
});

export default App;
