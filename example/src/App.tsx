import React, { useState, useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// eslint-disable-next-line import/no-unresolved
import { Themed, Button, ThemeContext, colors } from 'supergroww';

import {
  COMPONENT_SCREENS,
  ANIMATED_SCREENS,
  SCREEN_MAPPING,
} from './examples/navigation';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation, route }: any) => {
  const currentTheme = useContext(ThemeContext);
  const themeColors = colors[currentTheme];
  const { setTheme } = route.params;
  const changeThemeClick = () => {
    if (currentTheme === 'LIGHT') setTheme('DARK');
    else setTheme('LIGHT');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: themeColors.white }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Text style={{ fontSize: 20, margin: 20, fontWeight: 'bold' }}>
          UI components
        </Text>
        {Object.keys(COMPONENT_SCREENS).map((item) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(COMPONENT_SCREENS[item])}
            style={styles.navButtonContainer}
            key={item}
          >
            <Text>{COMPONENT_SCREENS[item]}</Text>
          </TouchableOpacity>
        ))}
        <Text style={{ fontSize: 20, margin: 20, fontWeight: 'bold' }}>
          Animated components
        </Text>
        {Object.keys(ANIMATED_SCREENS).map((item) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(ANIMATED_SCREENS[item])}
            style={styles.navButtonContainer}
            key={item}
          >
            <Text>{ANIMATED_SCREENS[item]}</Text>
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
function App() {
  const [theme, setTheme] = useState('LIGHT');
  return (
    <SafeAreaProvider>
      <Themed currentTheme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
              initialParams={{ setTheme }}
            />
            {SCREEN_MAPPING.map((item) => (
              <Stack.Screen
                name={item.name}
                component={item.screen}
                key={item.name}
                options={{ headerShown: false }}
              />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </Themed>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  navButtonContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(191, 191, 191, 0.5)',
  },
});
export default App;
