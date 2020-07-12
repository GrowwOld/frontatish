import React, { useState } from 'react';
import { View, Text } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import { Fade, useColors } from 'supergroww';
import { SafeAreaView } from 'react-native-safe-area-context';

const FadeExample = () => {
  const [visible, setVisible] = useState(false);
  const Colors = useColors();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <View style={{ marginTop: 40, flex: 1 }}>
        <Text
          style={{ padding: 20, color: Colors.font_1 }}
          onPress={() => setVisible(!visible)}
        >
          {visible ? 'Hide' : 'Show'}
        </Text>
        <Fade visible={visible} containerStyle={{ flex: 1 }}>
          <View
            style={{
              backgroundColor: Colors.font_4,
              flex: 1,
              margin: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={{ color: Colors.font_1 }}>Fade component</Text>
          </View>
        </Fade>
      </View>
    </SafeAreaView>
  );
};

export default FadeExample;
