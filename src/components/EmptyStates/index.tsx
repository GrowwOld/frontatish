// import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
// import React from 'react';
// import { Text, StyleSheet, SafeAreaView } from 'react-native';
// import { NavigationContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import EmptyStateGeneric from './EmptyStateGeneric';

// import EmptyStateGeneric from './EmptyStateGeneric'

import EmptyStateGeneric from './EmptyStateGeneric';

export default { EmptyStateGeneric };

// const EmptyStateStack = createStackNavigator();

// const EmptyStatesList = ({ navigation }: any) => {
//   const componentScreens = ['EmptyStateGeneric'];
//   return (
//     <SafeAreaView>
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{ flexGrow: 1 }}
//       >
//         {componentScreens.map((item) => (
//           <TouchableOpacity
//             onPress={() => navigation.navigate('EmptyStateGeneric')}
//             style={styles.navButtonContainer}
//             key="EmptyStateGeneric"
//           >
//             <Text>EmptyStateGeneric</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   navButtonContainer: {
//     padding: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: 'rgba(191, 191, 191, 0.5)',
//   },
// });

// function EmptyStatesNavigator() {
//   return (
//     <EmptyStateGeneric />
//     // <NavigationContainer>
//     // <EmptyStateStack.Navigator>
//     // <EmptyStateStack.Screen name="Home" component={EmptyStatesList} />
//     // </EmptyStateStack.Navigator>
//     // </NavigationContainer>
//   );
// }

// export default EmptyStatesNavigator;
