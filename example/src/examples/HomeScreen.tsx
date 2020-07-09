import React, { useContext } from 'react';
import { Text, StatusBar, StyleSheet } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
// eslint-disable-next-line import/no-unresolved
import { Button, ThemeContext, useColors } from 'supergroww';

import { COMPONENT_SCREENS, ANIMATED_SCREENS } from './navigation';

const HomeScreen = ({ navigation, route }: any) => {
  const currentTheme = useContext(ThemeContext);
  const Colors = useColors();
  const { setTheme } = route.params;
  const changeThemeClick = () => {
    if (currentTheme === 'LIGHT') {
      setTheme('DARK');
      StatusBar.setBarStyle('light-content', true);
    } else {
      setTheme('LIGHT');
      StatusBar.setBarStyle('default', true);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Text
          style={{
            fontSize: 20,
            margin: 20,
            fontWeight: 'bold',
            color: Colors.font_1,
          }}
        >
          UI components
        </Text>
        {Object.keys(COMPONENT_SCREENS).map((item) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate(COMPONENT_SCREENS[item])}
              style={styles.navButtonContainer}
              key={item}
            >
              <Text style={{ color: Colors.font_1 }}>
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
            color: Colors.font_1,
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
            <Text style={{ color: Colors.font_1 }}>
              {ANIMATED_SCREENS[item]}
            </Text>
          </TouchableOpacity>
        ))}
        <Button
          onPress={changeThemeClick}
          label="CHANGE THEME"
          customStyles={{ margin: 20 }}
        />
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
