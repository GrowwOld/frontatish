import React, { useState, useRef, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  PanResponderInstance,
  ListRenderItemInfo,
} from 'react-native';
// eslint-disable-next-line import/no-unresolved
import { DraggableList } from 'frontatish';

const getRandomColor = () => {
  return `rgb(
    ${Math.floor(Math.random() * 256)}
    ,
    ${Math.floor(Math.random() * 256)}
    ,
    ${Math.floor(Math.random() * 256)}
    )`;
};
const bgColor: string[] = [];

const DraggableListExample = () => {
  const [data, setData] = useState(
    Array.from(Array(50), (_, i) => {
      bgColor[i] = useMemo(() => getRandomColor(), []);
      return i;
    }),
  );

  const ITEM_HEIGHT = 100;

  const [draggingIdx, setDraggingIdx] = useState(-1);

  const flatListTopOffset = useRef(0);

  const listRenderItem = useCallback(
    (
      { item, index }: ListRenderItemInfo<any>,
      panResponder: PanResponderInstance | undefined,
    ) => {
      return (
        <View
          style={[
            {
              height: 100,
              width: '100%',
              backgroundColor: bgColor[item],
              borderWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              opacity: draggingIdx === index ? 0 : 1,
            },
          ]}
        >
          <View
            style={{
              width: 50,
              paddingVertical: 10,
              height: 30,
              paddingHorizontal: 10,
              marginHorizontal: 5,
              justifyContent: 'space-between',
              backgroundColor: 'grey',
            }}
            {...(panResponder ? panResponder.panHandlers : {})}
          >
            <View style={{ borderTopWidth: 1, width: '100%' }} />
            <View style={{ borderTopWidth: 1, width: '100%' }} />
            <View style={{ borderTopWidth: 1, width: '100%' }} />
          </View>
          <Text style={{ fontSize: 24, flex: 1, textAlign: 'center' }}>
            {item}
          </Text>
        </View>
      );
    },
    [draggingIdx],
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 50,
        paddingHorizontal: 20,
      }}
      onLayout={(event) => {
        flatListTopOffset.current = event.nativeEvent.layout.y;
      }}
    >
      <DraggableList
        listRenderItem={listRenderItem}
        flatlistTopOffset={flatListTopOffset}
        setDraggingIdx={setDraggingIdx}
        setData={setData}
        ITEM_HEIGHT={ITEM_HEIGHT}
        listData={data}
        HOLD_TIME={100}
      />
    </SafeAreaView>
  );
};

export default DraggableListExample;
