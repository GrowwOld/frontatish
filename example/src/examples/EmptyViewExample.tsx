import React, { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { EmptyView, useColors, Tag, CenteredView } from 'viserion';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';

type stateType = 'apiError' | 'noData' | undefined;
const EmptyViewExample = () => {
  const Colors = useColors();
  const [active, setActive] = useState<stateType>('noData');

  const dummyData = {
    apiError: {
      title: 'Something went wrong',
      subTitle: 'Our data fetching minions ran into an error',
      actionTitle: 'TRY AGAIN',
    },
    noData: {
      title: 'No data available',
      subTitle: 'Do something to add data, make an api call!',
      actionTitle: 'ADD DATA',
      actionType: 'primary',
    },
  };
  const data = dummyData[active!!];
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.white,
        padding: 20,
      }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Tag
          tagTitle="NO-DATA"
          onPress={() => setActive('noData')}
          containerStyle={{
            backgroundColor:
              active === 'noData' ? Colors.primary : Colors.primary_attr_40,
          }}
        />
        <Tag
          tagTitle="API-ERROR"
          onPress={() => setActive('apiError')}
          containerStyle={{
            backgroundColor:
              active === 'apiError' ? Colors.primary : Colors.primary_attr_40,
          }}
        />
      </View>
      <CenteredView>
        <EmptyView
          title={data.title}
          subTitle={data.subTitle}
          actionTitle={data.actionTitle}
          actionPress={() => {}}
          type={active}
        />
      </CenteredView>
    </SafeAreaView>
  );
};

export default EmptyViewExample;
