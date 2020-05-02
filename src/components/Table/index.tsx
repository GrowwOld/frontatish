import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Ripple from 'react-native-material-ripple';
import { TableProps, TableItemProps } from './types';
import { getColors } from '../../styles';

const Table = (props: TableProps) => {
  const [active, setActive] = useState(0);
  const {
    customItemComponents,
    title,
    option,
    data,
    isDark,
    leftKey,
    optionLabel,
    flatlistKey,
    rightKeyOnPress,
    leftKeyOnPress,
  } = props;
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
      <View style={[borderStyle, { height: 80, flexDirection: 'row' }]}>
        <Ripple
          style={{ flex: 2, paddingVertical: 16 }}
          onPress={onLeftKeyPress}
        >
          <Text style={{ flex: 1 }} numberOfLines={1}>
            {item[leftKey]}
          </Text>
        </Ripple>
        {renderOptionItem(item)}
      </View>
    );
  };
  const renderOptionItem = (item: any) => {
    // first check if there exist any customItemComponents
    // and then also check if customItemComponent exist for
    // the active option
    if (customItemComponents && customItemComponents[option[active]]) {
      const CustomItem = customItemComponents[option[active]];
      return <CustomItem item={item} onPress={onRightKeyPress} />;
    }
    return (
      <Ripple
        onPress={onRightKeyPress}
        style={{ flex: 1, paddingVertical: 16 }}
      >
        <Text style={{ flex: 1, textAlign: 'right' }}>
          {item[option[active]]}
        </Text>
      </Ripple>
    );
  };
  const onRightKeyPress = () => {
    // if there has been some action needed to be
    // done when user will click right item of table
    // then this callback will be passed & called from here
    if (rightKeyOnPress) rightKeyOnPress();
    if (typeof option === 'object') {
      setActive((active + 1) % option.length);
    }
  };
  const onLeftKeyPress = () => {
    // if there has been some action needed to be
    // done when user will click left item of table
    // then this callback will be passed & called from here
    if (leftKeyOnPress) leftKeyOnPress();
  };
  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <Text>{title}</Text>
        </View>
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: 'flex-end',
          }}
          onPress={onRightKeyPress}
        >
          <Text>{optionLabel[active]}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <TableItem item={item} index={index} />
        )}
        initialNumToRender={5}
        keyExtractor={(item) => item[flatlistKey]}
      />
    </View>
  );
};

export default Table;
