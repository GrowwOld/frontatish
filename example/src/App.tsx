import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { EmptyStateGeneric } from '../../src/components/EmptyStates';
import ButtonScreen from './examples/ButtonExample';
import ChexboxScreen from './examples/CheckboxExample';
import RadioButtonScreen from './examples/RadioButtonExample';
import NumPadScreen from './examples/NumPadExample';
import TableScreen from './examples/TableExample';
import PopupScreen from './examples/PopupExample';
import FadeScreen from './examples/FadeExample';
import EmptyStates from './examples/EmptyStatesExample';
// import { EmptyStatesNavigator } from 'supergroww';

// import { EmptyStateGeneric } from 'src/components/EmptyStates';

// import { EmptyStateGeneric } from 'supergroww';

const Stack = createStackNavigator();
// const EmptyStatesStack = createStackNavigator();

const HomeScreen = ({ navigation }: any) => {
  const componentScreens = [
    'Button',
    'CheckBox',
    'RadioButton',
    'NumPad',
    'Tables',
    'Popup',
    'EmptyStates',
  ];
  const animatedScreens = ['Fade'];
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Text style={{ fontSize: 20, margin: 20, fontWeight: 'bold' }}>
          UI components
        </Text>
        {componentScreens.map((item) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item)}
            style={styles.navButtonContainer}
            key={item}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
        <Text style={{ fontSize: 20, margin: 20, fontWeight: 'bold' }}>
          Animated components
        </Text>
        {animatedScreens.map((item) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item)}
            style={styles.navButtonContainer}
            key={item}
          >
            <Text>{item}</Text>
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
        <Stack.Screen name="Button" component={ButtonScreen} />
        <Stack.Screen name="CheckBox" component={ChexboxScreen} />
        <Stack.Screen name="RadioButton" component={RadioButtonScreen} />
        <Stack.Screen name="NumPad" component={NumPadScreen} />
        <Stack.Screen name="Tables" component={TableScreen} />
        <Stack.Screen name="Popup" component={PopupScreen} />
        <Stack.Screen
          name="EmptyStates"
          component={EmptyStates}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Fade" component={FadeScreen} />
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
