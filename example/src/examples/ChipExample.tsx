import React, { useState } from 'react';
import { View } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import { Chip, useColors } from 'frontatish';
import { SafeAreaView } from 'react-native-safe-area-context';

const ChipExample = () => {
  const Colors = useColors();
  const [isSelected, setIsSelected] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          backgroundColor: Colors.white,
        }}
      >
        <Chip
          onPress={() => setIsSelected(true)}
          isSelected={isSelected}
          onClose={() => setIsSelected(false)}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChipExample;
