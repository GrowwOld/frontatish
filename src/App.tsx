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
import { StyleSheet, SafeAreaView } from 'react-native';

import ButtonExample from './examples/ButtonExample';
import PopupExample from './examples/PopupExample';
import { getColors } from './styles';
import { Button } from './components';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // to close the popup
  const closePopup = () => setIsOpen(false);
  const openPopup = () => setIsOpen(true);
  const Colors = getColors(darkMode);
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: Colors.WHITE }]}>
      <ButtonExample isDark={darkMode} openPopup={openPopup} />
      <PopupExample closePopup={closePopup} isDark={darkMode} isOpen={isOpen} />
      <Button
        label="Change Theme"
        isDark={darkMode}
        onPress={() => setDarkMode(!darkMode)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // define styles
  container: { flex: 1 },
});

export default App;
