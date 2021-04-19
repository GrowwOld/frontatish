import React from 'react';
import { SwipableModal } from 'frontatish';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';

const SwipableModalExample = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ flex: 1, marginHorizontal: 20 }}>
        <Text>Swipable Modal Example</Text>
        <SwipableModal title="Hey"></SwipableModal>
      </View>
    </SafeAreaView>
  );
};

export default SwipableModalExample;
