import React, { useState } from 'react';
import { View, Text } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import { Fade } from 'supergroww';
import { SafeAreaView } from 'react-native-safe-area-context';

const FadeExample = () => {
  const [visible, setVisible] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ marginTop: 40, flex: 1 }}>
        <Text style={{ padding: 20 }} onPress={() => setVisible(!visible)}>
          {visible ? 'Hide' : 'Show'}
        </Text>
        <Fade visible={visible} containerStyle={{ flex: 1 }}>
          <View style={{ backgroundColor: 'red', flex: 1 }}>
            <Text>Fade component</Text>
          </View>
        </Fade>
      </View>
    </SafeAreaView>
  );
};

export default FadeExample;
