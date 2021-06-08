import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { TabView, useColors } from '../../../src';

const TabViewExample = () => {
  const Colors = useColors();
  return (
    <SafeAreaView style={{ justifyContent: 'center', margin: 16, flex: 1 }}>
      <TabView
        routes={[
          { title: 'Tab 1', component: <Text>Component 1</Text> },
          { title: 'Tab 2', component: <Text>Component 2</Text> },
          { title: 'Tab 3', component: <Text>Component 3</Text> },
        ]}
      />

      <TabView
        routes={[
          { title: 'Tab 1', component: <Text>Component 1</Text> },
          { title: 'Tab 2', component: <Text>Component 2</Text> },
          { title: 'Tab 3', component: <Text>Component 3</Text> },
          { title: 'Tab 4', component: <Text>Component 4</Text> },
        ]}
        activeTabColor={Colors.secondary}
        style={{ marginTop: 100 }}
        showfullWidthLine
      />
    </SafeAreaView>
  );
};

export default TabViewExample;
