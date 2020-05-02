import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { TableProps, TableItemProps } from './types';
import { getColors } from '../../styles';

const Table = (props: TableProps) => {
  const { title, option, data, isDark, leftKey, rightKey, flatlistKey } = props;
  const Colors = getColors(isDark);
  const TableItem = (itemProps: TableItemProps) => {
    const { item, index } = itemProps;
    const borderStyle =
      index !== data.length - 1
        ? {
            borderBottomWidth: 1,
            borderBottomColor: Colors.SILVER,
          }
        : null;
    return (
      <View style={[borderStyle, { flexDirection: 'row' }]}>
        <Text style={{ flex: 1 }} numberOfLines={1}>
          {item[leftKey]}
        </Text>
        <Text style={{ flex: 1, textAlign: 'right' }}>{item[rightKey]}</Text>
      </View>
    );
  };
  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <Text>{title}</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
          }}
        >
          <Text>{option}</Text>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <TableItem item={item} index={index} />
        )}
        keyExtractor={(item) => item[flatlistKey]}
      />
    </View>
  );
};

export default Table;
