import { TouchableOpacity } from 'react-native-gesture-handler';
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonScreen from './Examples/ButtonExample';
import RadioButtonScreen from './Examples/RadioButtonExample';
import NumPadScreen from './Examples/NumPadExample';
import TableScreen from './Examples/TableExample';
import PopupScreen from './Examples/PopupExample';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }: any) => {
  const screens = ['Button', 'RadioButton', 'NumPad', 'Tables', 'Popup'];
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
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Button" component={ButtonScreen} />
        <Stack.Screen name="RadioButton" component={RadioButtonScreen} />
        <Stack.Screen name="NumPad" component={NumPadScreen} />
        <Stack.Screen name="Tables" component={TableScreen} />
        <Stack.Screen name="Popup" component={PopupScreen} />
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
