import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
// eslint-disable-next-line import/no-unresolved
import { useColors, useThemeToggle, Switch } from 'supergroww';

import { COMPONENT_SCREENS, ANIMATED_SCREENS } from './navigation';

const HomeScreen = ({ navigation }: any) => {
  // const currentTheme = useContext(ThemeContext);
  const themeColors = useColors();
  const toggleTheme = useThemeToggle();
  // const { setTheme } = route.params;
  // const changeThemeClick = () => {
  //   if (currentTheme === 'LIGHT') {
  //     setTheme('DARK');
  //     StatusBar.setBarStyle('light-content', true);
  //   } else {
  //     setTheme('LIGHT');
  //     StatusBar.setBarStyle('default', true);
  //   }
  // };
  const [isOn, setIsOn] = useState(false);
  //   <Button
  //   onPress={changeThemeClick}
  //   label="CHANGE THEME"
  //   customStyles={{ margin: 20 }}
  // />

  const onThemeSwitch = () => {
    // dark mode is on
    if (isOn) {
      // console.log(toggleTheme);
      // set theme to light
      toggleTheme('light');
    } else {
      // set theme to dark
      // console.log(toggleTheme);
      toggleTheme('dark');
    }
    setIsOn(!isOn);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: themeColors.white }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            margin: 20,
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              flex: 1,
              fontSize: 20,
              fontWeight: 'bold',
              color: themeColors.font_1,
            }}
          >
            UI components
          </Text>
          <Switch
            isOn={isOn}
            onColor="#00D09C"
            offColor="#E6E7E8"
            // label="Example label"
            // size="small"
            onToggle={onThemeSwitch}
          />
        </View>
        {Object.keys(COMPONENT_SCREENS).map((item) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate(COMPONENT_SCREENS[item])}
              style={styles.navButtonContainer}
              key={item}
            >
              <Text style={{ color: themeColors.font_1 }}>
                {COMPONENT_SCREENS[item]}
              </Text>
            </TouchableOpacity>
          );
        })}
        <Text
          style={{
            fontSize: 20,
            margin: 20,
            fontWeight: 'bold',
            color: themeColors.font_1,
          }}
        >
          Animated components
        </Text>
        {Object.keys(ANIMATED_SCREENS).map((item) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(ANIMATED_SCREENS[item])}
            style={styles.navButtonContainer}
            key={item}
          >
            <Text style={{ color: themeColors.font_1 }}>
              {ANIMATED_SCREENS[item]}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  navButtonContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(191, 191, 191, 0.5)',
  },
});
export default HomeScreen;
