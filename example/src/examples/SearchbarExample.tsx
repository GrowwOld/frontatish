import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
// eslint-disable-next-line import/no-unresolved
import { Searchbar, useColors } from 'viserion';

const SearchbarExample = () => {
  const Colors = useColors();
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: Colors.white, padding: 20 }}
    >
      <Searchbar />
    </SafeAreaView>
  );
};

export default SearchbarExample;
