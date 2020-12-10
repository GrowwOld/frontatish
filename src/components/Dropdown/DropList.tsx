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
import { DropListProps, DropItem } from './types';
import Line from './Line';

const DropList = (props: DropListProps) => {
  const { items, active, onItemClick } = props;
  const Colors = useColors();
  const styles = getStyles(Colors);
  const renderItem = ({ item, index }: { item: DropItem; index: number }) => {
    return (
      <TouchableOpacity onPress={() => onItemClick(index)}>
        <View
          style={{
            backgroundColor: active === index ? Colors.font_6 : Colors.white,
            padding: 16,
          }}
        >
          <Text style={{ color: Colors.font_2 }}>{item?.label ?? item}</Text>
        </View>
        {index < items.length - 1 && <Line />}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={items}
        // contentContainerStyle={styles.listContainer}
        renderItem={renderItem}
        keyExtractor={(item) => item?.label ?? item}
        persistentScrollbar
      />
    </View>
  );
};

const getStyles = (Colors: ColorType) => {
  return StyleSheet.create({
    listContainer: {
      // backgroundColor: Colors.font_6,
      // position: 'absolute',
      // top: DEVICE_HEIGHT / 2,
      borderWidth: 1,
      borderColor: Colors.font_5,
      borderRadius: 6,
      height: 150,
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
