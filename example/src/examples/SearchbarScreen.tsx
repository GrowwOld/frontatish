import React, { useState } from 'react';
import {
  View,
  StatusBar,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Searchbar, useColors, useTheme } from 'frontatish'; // eslint-disable-line import/no-unresolved
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COMPONENT_SCREENS, ANIMATED_SCREENS } from './navigation';

const SearchbarScreen = () => {
  const Colors = useColors();
  const activeTheme = useTheme();

  const [query, setQuery] = useState('');
  const [resultsHeading, setResultsHeading] = useState('All Components');

  const allScreens = { ...COMPONENT_SCREENS, ...ANIMATED_SCREENS };

  const [componentList, setComponentList] = useState(allScreens);

  const onChangeText = (text: string) => {
    setQuery(text);
    if (text) {
      const newList: typeof componentList = Object.fromEntries(
        Object.entries(allScreens).filter(([, value]) =>
          value.toUpperCase().includes(text.toUpperCase()),
        ),
      );

      setComponentList(newList);

      if (Object.keys(newList).length) {
        setResultsHeading('Matching components');
      } else {
        setResultsHeading(`${text} not found`);
      }
    } else {
      setComponentList(allScreens);
      setResultsHeading('All Components');
    }
  };

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <StatusBar
        backgroundColor={Colors.white}
        animated
        barStyle={activeTheme === 'light' ? 'dark-content' : 'light-content'}
      />
      <View style={{ padding: 20, flexDirection: 'row' }}>
        <View style={{ flex: 4 }}>
          <Searchbar
            editable
            placeholder="Search Components"
            value={query}
            onChangeText={onChangeText}
            backIcon="arrow-back"
            onBackIconPress={navigation.goBack}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          margin: 20,
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            flex: 1,
            fontSize: 20,
            fontWeight: 'bold',
            color: Colors.font_1,
          }}
        >
          {resultsHeading}
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {Object.keys(componentList).map((item) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate(componentList[item])}
              style={{
                padding: 20,
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(191, 191, 191, 0.5)',
              }}
              key={item}
            >
              <Text style={{ color: Colors.font_1 }}>
                {componentList[item]}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchbarScreen;
