import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

// eslint-disable-next-line import/no-unresolved
import { EmptyState, useColors } from 'supergroww';

const EmptyStatesGenericWrapper = () => {
  const Colors = useColors();
  const middleSection = {
    exists: true,
    titleText: 'Generic Title Text',
    supplementaryText: 'Generic supplementary text in one line',
    buttonLabel: 'EXPLORE MUTUAL FUNDS >>',
    backgroundColor: Colors.white,
    splashImageURL: 'https://i.imgur.com/7LIS2G3.png',
    fontColor: Colors.font_1,
    customStyles: {},
  };
  const topSection = { exists: false };
  const bottomSection = { exists: false };
  return (
    <EmptyState
      topSection={topSection}
      middleSection={middleSection}
      bottomSection={bottomSection}
    />
  );
};

const EmptyStatesMFWatchlistWrapper = () => {
  const Colors = useColors();
  const middleSection = {
    exists: true,
    titleText: 'Not watching any funds',
    supplementaryText: 'Keep a watch on funds of your interest',
    backgroundColor: Colors.white,
    splashImageURL: 'https://i.imgur.com/7LIS2G3.png',
    fontColor: Colors.font_1,
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
    <EmptyState
      topSection={topSection}
      middleSection={middleSection}
      bottomSection={bottomSection}
    />
  );
};

const EmptyStatesStocksWatchlistWrapper = () => {
  const Colors = useColors();
  const middleSection = {
    exists: true,
    titleText: 'Not watching any stocks',
    supplementaryText: 'Keep a watch on stocks of your interest',
    backgroundColor: Colors.white,
    splashImageURL: 'https://i.imgur.com/7LIS2G3.png',
    fontColor: Colors.font_1,
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
    <EmptyState
      topSection={topSection}
      middleSection={middleSection}
      bottomSection={bottomSection}
    />
  );
};

const EmptyStatesOrdersWrapper = () => {
  const Colors = useColors();
  const middleSection = {
    exists: true,
    titleText: 'No stocks orders placed yet',
    supplementaryText: "It's a good day to start buying companies",
    buttonLabel: 'EXPLORE STOCKS >>',
    backgroundColor: Colors.white,
    splashImageURL: 'https://i.imgur.com/7LIS2G3.png',
    fontColor: Colors.font_1,
    customStyles: {},
  };
  const topSection = { exists: false };
  const bottomSection = { exists: false };
  return (
    <EmptyState
      topSection={topSection}
      middleSection={middleSection}
      bottomSection={bottomSection}
    />
  );
};

const EmptyStatesMFDashboardWrapper = () => {
  const Colors = useColors();
  const middleSection = {
    exists: true,
    backgroundColor: Colors.white,
    splashImageURL: 'https://i.imgur.com/7LIS2G3.png',
    fontColor: Colors.font_1,
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
    <EmptyState
      topSection={topSection}
      middleSection={middleSection}
      bottomSection={bottomSection}
    />
  );
};

const EmptyStatesStocksDashboardWrapper = () => {
  const Colors = useColors();
  const middleSection = {
    exists: true,
    backgroundColor: Colors.white,
    splashImageURL: 'https://i.imgur.com/7LIS2G3.png',
    fontColor: Colors.font_1,
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
    <EmptyState
      topSection={topSection}
      middleSection={middleSection}
      bottomSection={bottomSection}
    />
  );
};

const EmptyStatesCartWrapper = () => {
  const Colors = useColors();
  const middleSection = {
    exists: true,
    titleText: 'Your cart is empty',
    supplementaryText: "It's a good day to start investing in yourself",
    backgroundColor: Colors.white,
    splashImageURL: 'https://i.imgur.com/7LIS2G3.png',
    fontColor: Colors.font_1,
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
    <EmptyState
      topSection={topSection}
      middleSection={middleSection}
      bottomSection={bottomSection}
    />
  );
};

const EmptyStatesStack = createStackNavigator();

function EmptyStatesStackNavigator() {
  return (
    <EmptyStatesStack.Navigator screenOptions={{ headerShown: false }}>
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
  const Colors = useColors();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {emptyScreenComponentScreens.map((item) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item)}
            style={[
              styles.navButtonContainer,
              { borderBottomColor: Colors.font_3 },
            ]}
            key={item}
          >
            <Text style={{ color: Colors.font_1 }}>{item}</Text>
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
  },
});

export default EmptyStatesStackNavigator;
