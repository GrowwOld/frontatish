import React from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useColors } from '../../themes';
import { ColorType } from '../../common/types';
import Line from './Line';

interface DropListProps {
  items: Array<string>;
  active: number;
  offset: number;
  onItemClick: (index: number) => void;
}

const DropList = (props: DropListProps) => {
  const { items, active, onItemClick, offset } = props;
  const Colors = useColors();
  const styles = getStyles(Colors, offset);
  const renderItem = ({ item, index }: { item: string; index: number }) => {
    return (
      <TouchableOpacity onPress={() => onItemClick(index)}>
        <View
          style={{
            backgroundColor: active === index ? Colors.font_6 : Colors.white,
            padding: 16,
          }}
        >
          <Text>{item}</Text>
        </View>
        {index < items.length - 1 && <Line style={{ marginHorizontal: 16 }} />}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

const getStyles = (Colors: ColorType, offset: number) => {
  return StyleSheet.create({
    listContainer: {
      // backgroundColor: Colors.font_6,
      position: 'absolute',
      left: 0,
      right: 0,
      top: offset,
      // zIndex: 1001,
      // top: DEVICE_HEIGHT / 2,
      borderWidth: 1,
      borderColor: Colors.font_5,
      borderRadius: 6,
      // shadowColor: '#000',
      // shadowOffset: {
      //   width: 0,
      //   height: 1,
      // },
      // shadowOpacity: 0.2,
      // shadowRadius: 1.41,
      // elevation: 2,
    },
  });
};

export default DropList;
