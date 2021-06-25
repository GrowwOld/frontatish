import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// eslint-disable-next-line import/no-unresolved
import { ThemeProvider } from 'frontatish';

import HomeScreen from './examples/HomeScreen';
import { SCREEN_MAPPING } from './examples/navigation';
import colors from './examples/colors';
import SearchbarScreen from './examples/SearchbarScreen';

const Stack = createStackNavigator();
// const EmptyStatesStack = createStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme="light" colors={colors}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={() => ({
              headerShown: false,
              // gestureEnabled: false,
              ...TransitionPresets.SlideFromRightIOS,
            })}
          >
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
              // initialParams={{ setTheme }}
            />
            <Stack.Screen
              name="SearchbarScreen"
              component={SearchbarScreen}
              options={{ headerShown: false }}
              // initialParams={{ setTheme }}
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
