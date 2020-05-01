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
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import ButtonExample from './examples/ButtonExample';
import NumPadExample from './examples/NumPadExample';
import PopupExample from './examples/PopupExample';
import RadioButtonExample from './examples/RadioButtonExample';
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <ButtonExample isDark={darkMode} openPopup={openPopup} />
        <RadioButtonExample isDark={darkMode} />
        <PopupExample closePopup={closePopup} isDark={darkMode} isOpen={isOpen}>
          <NumPadExample isDark={darkMode} />
        </PopupExample>
      </ScrollView>
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
