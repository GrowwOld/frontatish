import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  COMPONENT_SCREENS,
  ANIMATED_SCREENS,
  SCREEN_MAPPING,
} from './examples/navigation';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView>
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
      </ScrollView>
    </SafeAreaView>
  );
};
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        {SCREEN_MAPPING.map((item) => (
          <Stack.Screen
            name={item.name}
            component={item.screen}
            key={item.name}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
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
