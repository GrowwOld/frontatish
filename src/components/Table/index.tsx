import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { TableProps, TableItemProps } from './types';
import { Fonts } from '../../styles';
import { useColors } from '../../themes';

const Table = (props: TableProps) => {
  const [active, setActive] = useState(0);
  const {
    customLeftItemComponents,
    customRightItemComponents,
    data,
    flatlistKey,
    leftKey,
    leftKeyOnPress,
    leftItemTextStyle,
    option,
    optionTextStyle,
    optionLabel,
    rightKeyOnPress,
    rightItemTextStyle,
    title,
    titleTextStyle,
    topContainerStyle,
  } = props;
  const Colors = useColors();
  const TableItem = (itemProps: TableItemProps) => {
    const { item } = itemProps;
    return (
      <View style={{ height: 80, flexDirection: 'row' }}>
        {renderLeftOptionItem(item)}
        {renderRightOptionItem(item)}
      </View>
    );
  };
  // to render the left part of each row of a table
  const renderLeftOptionItem = (item: any) => {
    const mainLeftItemTextStyle = {
      ...styles.leftText,
      color: Colors.font_1,
      ...leftItemTextStyle,
    };
    // first check if there exist any customLeftItemComponents
    // and then also check if customLeftItemComponent exist for
    // the active option
    if (customLeftItemComponents && customLeftItemComponents[leftKey]) {
      const CustomLeftItem = customLeftItemComponents[leftKey];
      return <CustomLeftItem item={item} onPress={onLeftKeyPress} />;
    }
    return (
      <TouchableOpacity
        style={{ flex: 2, paddingVertical: 16 }}
        onPress={onLeftKeyPress}
      >
        <Text style={mainLeftItemTextStyle} numberOfLines={1}>
          {extractResponseFromApiKey(item, leftKey.split('.'))}
        </Text>
      </TouchableOpacity>
    );
  };
  const renderRightOptionItem = (item: any) => {
    const mainRightItemTextStyle = {
      ...styles.rightText,
      color: Colors.font_1,
      ...rightItemTextStyle,
    };
    // first check if there exist any customRightItemComponents
    // and then also check if customRightItemComponent exist for
    // the active option

    if (
      customRightItemComponents &&
      customRightItemComponents[option[active]]
    ) {
      const CustomRightItem = customRightItemComponents[option[active]];
      return <CustomRightItem item={item} onPress={onRightKeyPress} />;
    }
    return (
      <TouchableOpacity
        onPress={onRightKeyPress}
        style={{ flex: 1, paddingVertical: 16 }}
      >
        <Text style={mainRightItemTextStyle}>
          {extractResponseFromApiKey(item, option[active].split('.'))}
        </Text>
      </TouchableOpacity>
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

  const extractResponseFromApiKey = (
    item: any,
    depthObjArray: Array<string>,
  ): string => {
    // to handle nested case Ex: data.class.student
    if (depthObjArray.length === 1) {
      return item[depthObjArray[0]];
    }
    return extractResponseFromApiKey(
      item[depthObjArray[0]],
      depthObjArray.slice(1),
    );
  };

  const mainTitleTextStyle = {
    ...styles.titleText,
    color: Colors.font_1,
    ...titleTextStyle,
  };
  const mainOptionTitleTextStyle = {
    ...styles.titleText,
    color: Colors.primary,
    ...optionTextStyle,
  };
  return (
    <View>
      <View style={[topContainerStyle, { flexDirection: 'row' }]}>
        <View style={{ flex: 1 }}>
          <Text style={mainTitleTextStyle}>{title}</Text>
        </View>
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: 'flex-end',
          }}
          onPress={onRightKeyPress}
        >
          <Text style={mainOptionTitleTextStyle}>{optionLabel[active]}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <TableItem item={item} index={index} />
        )}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{ borderBottomWidth: 1, borderBottomColor: Colors.font_4 }}
            />
          );
        }}
        initialNumToRender={5}
        keyExtractor={(item) =>
          extractResponseFromApiKey(item, flatlistKey.split('.'))
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  leftText: {
    flex: 1,
    fontFamily: Fonts.type.gotham_medium,
    fontSize: Fonts.size.small_13,
    fontWeight: '800',
  },
  rightText: {
    flex: 1,
    textAlign: 'right',
    fontFamily: Fonts.type.gotham_medium,
    fontSize: Fonts.size.small_13,
    fontWeight: '800',
  },
  titleText: {
    fontFamily: Fonts.type.gotham_medium,
    fontSize: Fonts.size.small_13,
    fontWeight: '800',
  },
});
export default Table;
