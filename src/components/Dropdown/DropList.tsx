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
  const { items, active, onChange, itemStyle } = props;
  const Colors = useColors();
  const styles = getStyles(Colors);
  const renderItem = ({ item, index }: { item: DropItem; index: number }) => {
    return (
      <TouchableOpacity onPress={() => onChange(index)}>
        <View
          style={{
            backgroundColor: active === index ? Colors.font_6 : Colors.white,
            padding: 16,
          }}
        >
          <Text style={{ color: Colors.font_2, ...itemStyle }}>
            {item?.label ?? item}
          </Text>
        </View>
        {index < items.length - 1 && <Line />}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.listContainer}>
      <FlatList
        accessibilityRole="scrollbar"
        // removeClippedSubviews={false} helps us tabs and nav keys detect hiddent flatlist and scroll to every menu items
        // without this tabs and nav keys won't detect every menu items
        removeClippedSubviews={false}
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
      borderWidth: 1,
      borderColor: Colors.font_5,
      borderRadius: 6,
      height: 150,
    },
  });
};

export default DropList;
