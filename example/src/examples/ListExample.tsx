import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { List } from 'frontatish';
import { SafeAreaView } from 'react-native-safe-area-context';

const ListExample = () => {
  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <List
        leftLabel="Plain Text"
        leftSubtext="Subtext"
        rightLabel="$2,33,6755"
        // rightSubtext="RightSubtitle"
        rightChip
        clickable
        sparkLine
      />
    </SafeAreaView>
  );
};
export default ListExample;
