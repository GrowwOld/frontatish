import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import EmptyStatesWrapper from './EmptyStateGenericExample';

// import { EmptyStateGeneric } from '../../../../src/components/EmptyStates';
// const EmptyStatesWrapper = ({ navigation }: any) => {
//   return (
//     <View>
//       <EmptyStateGeneric fontColor="yellow" />
//     </View>
//   );
// };

const EmptyStatesStack = createStackNavigator();

function EmptyStatesStackNavigator() {
  return (
    <EmptyStatesStack.Navigator>
      <EmptyStatesStack.Screen name="EmptyStatesHome" component={EmptyStates} />
      <EmptyStatesStack.Screen
        name="EmptyStateGeneric"
        component={EmptyStatesWrapper}
      />
    </EmptyStatesStack.Navigator>
  );
}

const EmptyStates = ({ navigation }: any) => {
  const emptyScreenComponentScreens = ['EmptyStateGeneric'];
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {emptyScreenComponentScreens.map((item) => (
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

const styles = StyleSheet.create({
  navButtonContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(191, 191, 191, 0.5)',
  },
});

export default EmptyStatesStackNavigator;
