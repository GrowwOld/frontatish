import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import { EmptyStateGeneric } from '../../../src/components/EmptyStates';

const EmptyStatesGenericWrapper = () => {
  const middleSection = {
    exists: true,
    titleText: 'Generic Title Text',
    supplementaryText: 'Generic supplementary text in one line',
    buttonLabel: 'EXPLORE MUTUAL FUNDS >>',
    backgroundColor: '#ffffff',
    splashImageURL: 'https://i.imgur.com/7LIS2G3.png',
    fontColor: 'black',
    isDark: false,
    customStyles: {},
  };
  const topSection = { exists: false };
  const bottomSection = { exists: false };
  return (
    <EmptyStateGeneric
      topSection={topSection}
      middleSection={middleSection}
      bottomSection={bottomSection}
    />
  );
};

const EmptyStatesMFWatchlistWrapper = () => {
  const middleSection = {
    exists: true,
    titleText: 'Not watching any funds',
    supplementaryText: 'Keep a watch on funds of your interest',
    backgroundColor: '#ffffff',
    splashImageURL: 'https://i.imgur.com/7LIS2G3.png',
    fontColor: 'black',
    isDark: false,
    customStyles: {},
  };
  const topSection = { exists: false };
  const bottomSection = {
    exists: true,
    titleText: 'Popular on Groww',
    buttonLabel: 'SEE ALL FUNDS',
    supplementaryText:
      'Popular on Groww. \n\n Replace this section with your own components',
  };
  return (
    <EmptyStateGeneric
      topSection={topSection}
      middleSection={middleSection}
      bottomSection={bottomSection}
    />
  );
};

const EmptyStatesStocksWatchlistWrapper = () => {
  const middleSection = {
    exists: true,
    titleText: 'Not watching any stocks',
    supplementaryText: 'Keep a watch on stocks of your interest',
    backgroundColor: '#ffffff',
    splashImageURL: 'https://i.imgur.com/7LIS2G3.png',
    fontColor: 'black',
    isDark: false,
    customStyles: {},
  };
  const topSection = { exists: false };
  const bottomSection = {
    exists: true,
    titleText: 'Popular on Groww',
    buttonLabel: 'SEE ALL STOCKS',
    supplementaryText:
      'Popular on Groww. \n\n Replace this section with your own components',
  };
  return (
    <EmptyStateGeneric
      topSection={topSection}
      middleSection={middleSection}
      bottomSection={bottomSection}
    />
  );
};

const EmptyStatesOrdersWrapper = () => {
  const middleSection = {
    exists: true,
    titleText: 'No stocks orders placed yet',
    supplementaryText: "It's a good day to start buying companies",
    buttonLabel: 'EXPLORE STOCKS >>',
    backgroundColor: '#ffffff',
    splashImageURL: 'https://i.imgur.com/7LIS2G3.png',
    fontColor: 'black',
    isDark: false,
    customStyles: {},
  };
  const topSection = { exists: false };
  const bottomSection = { exists: false };
  return (
    <EmptyStateGeneric
      topSection={topSection}
      middleSection={middleSection}
      bottomSection={bottomSection}
    />
  );
};

const EmptyStatesMFDashboardWrapper = () => {
  const middleSection = {
    exists: true,
    backgroundColor: '#ffffff',
    splashImageURL: 'https://i.imgur.com/7LIS2G3.png',
    fontColor: 'black',
    isDark: false,
    customStyles: {},
  };
  const topSection = {
    exists: true,
    titleText: "Didn't invest yet?",
    supplementaryText: 'Easily manage all your mutual funds in one place',
  };
  const bottomSection = {
    exists: true,
    titleText: 'Recently viewed funds',
    buttonLabel: 'SEE ALL FUNDS',
  };
  return (
    <EmptyStateGeneric
      topSection={topSection}
      middleSection={middleSection}
      bottomSection={bottomSection}
    />
  );
};

const EmptyStatesStocksDashboardWrapper = () => {
  const middleSection = {
    exists: true,
    backgroundColor: '#ffffff',
    splashImageURL: 'https://i.imgur.com/7LIS2G3.png',
    fontColor: 'black',
    isDark: false,
    customStyles: {},
  };
  const topSection = {
    exists: true,
    titleText: "Didn't buy anything yet?",
    supplementaryText: 'Easily manage all your stocks in one place',
  };
  const bottomSection = {
    exists: true,
    titleText: 'Recently viewed stocks',
    buttonLabel: 'SEE ALL STOCKS',
  };
  return (
    <EmptyStateGeneric
      topSection={topSection}
      middleSection={middleSection}
      bottomSection={bottomSection}
    />
  );
};

const EmptyStatesCartWrapper = () => {
  const middleSection = {
    exists: true,
    titleText: 'Your cart is empty',
    supplementaryText: "It's a good day to start investing in yourself",
    backgroundColor: '#ffffff',
    splashImageURL: 'https://i.imgur.com/7LIS2G3.png',
    fontColor: 'black',
    isDark: false,
    customStyles: {},
  };
  const topSection = { exists: false };
  const bottomSection = {
    exists: true,
    titleText: 'Popular Stocks on Groww',
    buttonLabel: 'SEE ALL STOCKS',
    supplementaryText:
      'Popular on Groww. \n\n Replace this section with your own components',
  };
  return (
    <EmptyStateGeneric
      topSection={topSection}
      middleSection={middleSection}
      bottomSection={bottomSection}
    />
  );
};

const EmptyStatesStack = createStackNavigator();

function EmptyStatesStackNavigator() {
  return (
    <EmptyStatesStack.Navigator>
      <EmptyStatesStack.Screen name="EmptyStatesHome" component={EmptyStates} />
      <EmptyStatesStack.Screen
        name="EmptyStateGeneric"
        component={EmptyStatesGenericWrapper}
      />
      <EmptyStatesStack.Screen
        name="EmptyStateMFWatchlist"
        component={EmptyStatesMFWatchlistWrapper}
      />
      <EmptyStatesStack.Screen
        name="EmptyStateStocksWatchlist"
        component={EmptyStatesStocksWatchlistWrapper}
      />
      <EmptyStatesStack.Screen
        name="EmptyStateOrders"
        component={EmptyStatesOrdersWrapper}
      />
      <EmptyStatesStack.Screen
        name="EmptyStateMFDashboard"
        component={EmptyStatesMFDashboardWrapper}
      />
      <EmptyStatesStack.Screen
        name="EmptyStateStocksDashboard"
        component={EmptyStatesStocksDashboardWrapper}
      />
      <EmptyStatesStack.Screen
        name="EmptyStateCart"
        component={EmptyStatesCartWrapper}
      />
    </EmptyStatesStack.Navigator>
  );
}

const EmptyStates = ({ navigation }: any) => {
  const emptyScreenComponentScreens = [
    'EmptyStateGeneric',
    'EmptyStateMFWatchlist',
    'EmptyStateStocksWatchlist',
    'EmptyStateOrders',
    'EmptyStateMFDashboard',
    'EmptyStateStocksDashboard',
    'EmptyStateCart',
  ];
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
