import React from 'react';

import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// eslint-disable-next-line import/no-unresolved
import { Table, Ripple, useColors, Fonts } from 'frontatish';
// import { Fonts, getColors } from '../styles';
import { tableData } from './fixtures';

interface MrpItemProps {
  item: any;
  onPress?: () => void;
}
const TableExample = () => {
  const Colors = useColors();
  const MrpItem = (MrpProps: MrpItemProps) => {
    const { item, onPress } = MrpProps;
    const prefix = item.dayChange > 0 ? '+' : '';
    const prefixColor =
      item.dayChange > 0 ? Colors.primary : Colors.semantic_red;
    const { marketPrice } = item;
    const dayChange = item.dayChange.toFixed(2);
    const dayChangePerc = item.dayChangePerc.toFixed(2);
    return (
      <Ripple
        style={{ flex: 1, alignItems: 'flex-end', paddingVertical: 16 }}
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={`Last traded price ${marketPrice}, absolute change ${
          prefix + ' ' + dayChange
        }, change in percent ${dayChangePerc} `}
      >
        <Text style={{ color: Colors.font_1 }}>{item.marketPrice}</Text>
        <Text style={{ color: prefixColor }}>
          {`${prefix} ${dayChange} (${dayChangePerc})`}
        </Text>
      </Ripple>
    );
  };
  // key should be exactly the same as option keys
  // so that it can be correctly mapped
  const customRightItemComponents = { marketPrice: MrpItem };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}
    >
      <Text
        style={{
          color: Colors.font_1,
          fontSize: Fonts.size.h3,
          marginHorizontal: 20,
        }}
      >
        Table Example
      </Text>
      <View
        style={{
          marginHorizontal: 20,
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <Table
          data={tableData}
          title="Name"
          option={['marketPrice', 'holding', 'industryName']}
          optionLabel={['Market Price', 'Holding', 'Sector']}
          leftKey="companyHeader.companyName"
          flatlistKey="isin"
          customRightItemComponents={customRightItemComponents}
          itemSeparator={() => {
            return (
              <View
                style={{
                  borderBottomWidth: 1,
                }}
              />
            );
          }}
          tableItemStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default TableExample;
