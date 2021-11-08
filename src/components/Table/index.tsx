import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { TableProps, TableItemProps } from './types';
import { Fonts } from '../../styles';
import { useColors } from '../../themes';

// This component needs more refactoration for accessibility
// because customComponents more callbacks props for deciding accessibileLabels
// In our example we got custom custom component for marketPrice
// and the callback only says about price, it also needs some more contextual value
// which will be the adjacent share name but for now we don't have access to it.
// In summary for every customComponent passed we need to pass more contextual values for deciding accessibileLabels
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
    itemSeparator,
    tableItemStyle,
    rightOptionIconName,
  } = props;
  const Colors = useColors();
  const nextOptionLabel = optionLabel[(active + 1) % option.length];

  const TableItem = (itemProps: TableItemProps) => {
    const { item } = itemProps;
    return (
      <View style={{ height: 80, flexDirection: 'row', ...tableItemStyle }}>
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
      return (
        <CustomLeftItem item={item} onPress={() => onLeftKeyPress(item)} />
      );
    }
    return (
      <TouchableOpacity
        style={{
          flex: 2,
          justifyContent: 'center',
        }}
        onPress={() => onLeftKeyPress(item)}
        accessibilityRole="button"
      >
        <Text style={mainLeftItemTextStyle} numberOfLines={2}>
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
      return (
        <CustomRightItem item={item} onPress={() => onRightKeyPress(item)} />
      );
    }

    const dataToDisplay: string = extractResponseFromApiKey(
      item,
      option[active].split('.'),
    );

    return (
      <TouchableOpacity
        onPress={() => onRightKeyPress(item)}
        style={{ flex: 1, paddingVertical: 16 }}
        accessibilityRole="button"
        accessibilityLabel={dataToDisplay.toString()}
        accessibilityHint={`Press to view ${nextOptionLabel} data`}
      >
        <Text style={mainRightItemTextStyle}>{dataToDisplay}</Text>
      </TouchableOpacity>
    );
  };
  const onRightKeyPress = (item?: any) => {
    // if there has been some action needed to be
    // done when user will click right item of table
    // then this callback will be passed & called from here
    if (rightKeyOnPress) rightKeyOnPress(optionLabel[active], item);
    if (typeof option === 'object') {
      setActive((active + 1) % option.length);
    }
  };

  const onLeftKeyPress = (item: any) => {
    // if there has been some action needed to be
    // done when user will click left item of table
    // then this callback will be passed & called from here
    if (leftKeyOnPress) leftKeyOnPress(item);
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
      <View
        style={[
          topContainerStyle,
          { flexDirection: 'row', justifyContent: 'space-between' },
        ]}
      >
        <Text style={mainTitleTextStyle}>{title}</Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={onRightKeyPress}
          accessibilityRole="button"
          accessibilityHint={`Press to view ${nextOptionLabel} data`}
          accessibilityLabel={optionLabel[active]}
        >
          <Text style={mainOptionTitleTextStyle}>{optionLabel[active]}</Text>
          <Icon
            name={rightOptionIconName ?? 'select-arrows'}
            color={Colors.primary}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <TableItem item={item} index={index} />
        )}
        ItemSeparatorComponent={itemSeparator}
        showsVerticalScrollIndicator={false}
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
