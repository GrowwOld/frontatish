import { TouchableOpacity } from 'react-native-gesture-handler';
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ButtonScreen,
  RadioButtonScreen,
  NumPadScreen,
  TableScreen,
} from './Examples';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }: any) => {
  const screens = [
    'ButtonScreen',
    'RadioButtonScreen',
    'NumPadScreen',
    'TableScreen',
  ];
  return (
    <SafeAreaView>
      {screens.map((item) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item)}
          style={styles.navButtonContainer}
          key={item}
        >
          <Text>{item}</Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ButtonScreen" component={ButtonScreen} />
        <Stack.Screen name="RadioButtonScreen" component={RadioButtonScreen} />
        <Stack.Screen name="NumPadScreen" component={NumPadScreen} />
        <Stack.Screen name="TableScreen" component={TableScreen} />
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
