import React, { useState, useRef, useMemo } from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  PanResponderInstance,
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
    Array.from(Array(500), (_, i) => {
      bgColor[i] = useMemo(() => getRandomColor(), []);
      return i;
    }),
  );

  const listRef = useRef<FlatList<any>>();
  const scrollOffset = useRef(0);
  const ITEM_HEIGHT = 50;

  const [panResponder, setPanResponder] = useState<PanResponderInstance>();

  const [draggingInfo, setDraggingInfo] = useState({
    dragging: false,
    draggingIdx: -1,
  });

  const flatListTopOffset = useRef(0);

  const getView = (item: number, index: number) => {
    return (
      <View
        style={[
          {
            height: 50,
            width: '100%',
            backgroundColor: bgColor[item],
            borderWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
            opacity: draggingInfo.draggingIdx === index ? 0 : 1,
          },
        ]}
        {...(panResponder ? panResponder.panHandlers : {})}
      >
        <Text style={{ fontSize: 24, flex: 1, textAlign: 'center' }}>
          {item}
        </Text>
      </View>
    );
  };

  const getFlatList = () => {
    return (
      <FlatList
        scrollEnabled={!draggingInfo.dragging}
        disableVirtualization={false}
        ref={listRef}
        getItemLayout={(_, index) => ({
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
          index,
        })}
        onScroll={(event) => {
          scrollOffset.current = event.nativeEvent.contentOffset.y;
        }}
        scrollEventThrottle={16}
        data={data}
        renderItem={({ item, index }) => getView(item, index)}
        keyExtractor={(item) => item.toString()}
        style={{ width: '100%' }}
      />
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 50,
      }}
      onLayout={(event) => {
        flatListTopOffset.current = event.nativeEvent.layout.y;
      }}
    >
      <DraggableList
        flatList={getFlatList()}
        getView={getView}
        scrollOffset={scrollOffset}
        flatListRef={listRef}
        flatListTopOffset={flatListTopOffset}
        setInfo={(info) => setDraggingInfo(info)}
        setPan={(pan) => setPanResponder(pan)}
        setData={(newData) => setData(newData)}
        ITEM_HEIGHT={ITEM_HEIGHT}
        propData={data}
      />
    </SafeAreaView>
  );
};

export default DraggableListExample;
