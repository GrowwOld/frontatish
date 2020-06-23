import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// eslint-disable-next-line import/no-unresolved
import { Themed } from 'supergroww';

import HomeScreen from './examples/HomeScreen';
import { SCREEN_MAPPING } from './examples/navigation';

const Stack = createStackNavigator();

function App() {
  const [theme, setTheme] = useState('LIGHT');
  const [val, setVal] = useState(0);
  const incVal = () => setVal(val + 1);
  return (
    <SafeAreaProvider>
      <Themed currentTheme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
              initialParams={{ setTheme, incVal }}
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

export default App;
