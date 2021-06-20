import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  Platform,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  useColors,
  useTheme,
  useThemeToggle,
  Switch,
  Searchbar,
  Fonts,
  // eslint-disable-next-line import/no-unresolved
} from 'frontatish';

import { COMPONENT_SCREENS, ANIMATED_SCREENS } from './navigation';

const HomeScreen = ({ navigation }: any) => {
  // const currentTheme = useContext(ThemeContext);
  const Colors = useColors();
  const toggleTheme = useThemeToggle();
  const activeTheme = useTheme();
  const [isOn, setIsOn] = useState(false);
  const onThemeSwitch = () => {
    // dark mode is on
    if (isOn) {
      // set theme to light
      toggleTheme('light');
      StatusBar.setBarStyle('dark-content', true);
    } else {
      // set theme to dark
      toggleTheme('dark');
      StatusBar.setBarStyle('default', true);
      if (Platform.OS === 'android') {
        StatusBar.setBackgroundColor(Colors.white);
      }
    }
    setIsOn(!isOn);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <StatusBar
        backgroundColor={Colors.white}
        animated
        barStyle={activeTheme === 'light' ? 'dark-content' : 'light-content'}
      />
      <View style={{ padding: 20, flexDirection: 'row' }}>
        <View style={{ flex: 4 }}>
          <Searchbar
            value="Search Components"
            leftLogo={require('../assets/groww_logo.png')}
            rightIcon="account-circle"
            onPress={() => navigation.navigate('SearchbarScreen')}
            editable={false}
          />
        </View>
        <View
          style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}
        >
          <Switch isOn={isOn} onToggle={onThemeSwitch} />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
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
              fontSize: Fonts.size.h5,
              fontWeight: 'bold',
              color: Colors.font_1,
            }}
          >
            UI components
          </Text>
        </View>
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
            fontSize: Fonts.size.h5,
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
