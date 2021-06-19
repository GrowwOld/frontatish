import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { List } from 'frontatish';
import { SafeAreaView } from 'react-native-safe-area-context';

const ListExample = () => {
  const onPress = () => {
    console.log('pressed');
  };
  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <List leftLabel="Plain Text" onPress={onPress} />
      <List leftLabel="Plain Text" rightLabel="$2,33,6755" onPress={onPress} />
      <List
        leftLabel="Plain Text"
        leftSubtext="Subtext"
        rightLabel="$2,33,675"
        rightChipLabel="Chip"
        onPress={onPress}
      />
      <List
        leftLabel="Plain Text"
        leftSubtext="Subtext"
        rightLabel="$2,33,675"
        rightChipLabel="Chip"
        sparkLine
        onPress={onPress}
      />
      <List
        leftLabel="Plain Text"
        leftSubtext="Subtext"
        rightLabel="$2,33,675"
        rightSubtext="Subtitle"
        rightChipLabel="Chip"
        disabled
        sparkLine
        leftChipLabel="Chip"
        onPress={onPress}
      />
    </SafeAreaView>
  );
};
export default ListExample;
