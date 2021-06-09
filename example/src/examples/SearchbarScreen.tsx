import React, { useState, useCallback } from 'react';
import {
  View,
  StatusBar,
  Platform,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Searchbar,
  useColors,
  useThemeToggle,
  useTheme,
  Switch,
} from 'frontatish'; // eslint-disable-line import/no-unresolved
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { debounce } from '../../../src/common/utils';
import { COMPONENT_SCREENS, ANIMATED_SCREENS } from './navigation';

const SearchbarScreen = () => {
  const Colors = useColors();
  const toggleTheme = useThemeToggle();
  const activeTheme = useTheme();
  const [isOn, setIsOn] = useState(false);

  const [query, setQuery] = useState('');
  const [resultsHeading, setResultsHeading] = useState('All Components');

  const onThemeSwitch = () => {
    // dark mode is on
    if (isOn) {
      // set theme to light
      toggleTheme('light');
      StatusBar.setBarStyle('dark-content', true);
    } else {
      // set theme to dark
      toggleTheme('dark');
      StatusBar.setBarStyle('default', true);
      if (Platform.OS === 'android') {
        StatusBar.setBackgroundColor(Colors.white);
      }
    }
    setIsOn(!isOn);
  };

  const [componentList, setComponentList] = useState({
    ...COMPONENT_SCREENS,
    ...ANIMATED_SCREENS,
  });

  const onChangeQuery = (text: string) => {
    if (text) {
      const newList: typeof componentList = Object.fromEntries(
        Object.entries(componentList).filter(([, value]) =>
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
      setComponentList(componentList);
      setResultsHeading('All Components');
    }
  };

  const debouncedOnChangeQuery = useCallback(debounce(onChangeQuery, 500), []);

  const onChangeText = (text: string) => {
    debouncedOnChangeQuery(text);
    setQuery(text);
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
            placeholder="Search Components"
            value={query}
            onChangeText={onChangeText}
            backIcon="arrow-back"
            onBackIconPress={navigation.goBack}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}
        >
          <Switch isOn={isOn} onToggle={onThemeSwitch} />
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
