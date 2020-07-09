import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// eslint-disable-next-line import/no-unresolved
import { ThemeProvider } from 'supergroww';

import HomeScreen from './examples/HomeScreen';
import { SCREEN_MAPPING } from './examples/navigation';

const Stack = createStackNavigator();

function App() {
  const [theme, setTheme] = useState('LIGHT');
  return (
    <SafeAreaProvider>
      <ThemeProvider currentTheme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={() => ({
              headerShown: false,
              gestureEnabled: true,
              ...TransitionPresets.SlideFromRightIOS,
            })}
          >
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
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
