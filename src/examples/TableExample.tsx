import React from 'react';

import { View, Text } from 'react-native';
import { Table, Ripple } from '../components';
import { Fonts, getColors } from '../styles';
import { tableData } from './Mockdata';

interface TableExampleProps {
  isDark: boolean;
}
interface MrpItemProps {
  item: any;
  onPress?: () => void;
}
const TableExample = (props: TableExampleProps) => {
  const { isDark } = props;
  const Colors = getColors(isDark);
  const MrpItem = (MrpProps: MrpItemProps) => {
    const { item, onPress } = MrpProps;
    const prefix = item.dayChange > 0 ? '+' : '';
    return (
      <Ripple
        style={{ flex: 1, alignItems: 'flex-end', paddingVertical: 16 }}
        onPress={onPress}
      >
        <Text>{item.marketPrice}</Text>
        <Text
          style={{
            fontFamily: Fonts.type.gotham_medium,
            fontSize: Fonts.size.small_13,
            fontWeight: '800',
            color: item.dayChange > 0 ? Colors.GREEN_BLUE : Colors.PALE_RED,
          }}
        >
          {`${prefix} ${item.dayChange.toFixed(
            2,
          )} (${item.dayChangePerc.toFixed(2)})`}
        </Text>
      </Ripple>
    );
  };

  const customItemComponents = { marketPrice: MrpItem };
  return (
    <View style={{ flex: 1, marginHorizontal: 20 }}>
      <Text style={[Fonts.style.h4, { color: Colors.BLACK }]}>
        Table Example
      </Text>
      <Table
        data={tableData}
        isDark={isDark}
        title="Name"
        option={['marketPrice', 'holding', 'industryName']}
        optionLabel={['Market Price', 'Holding', 'Sector']}
        leftKey="companyName"
        rightKey="marketPrice"
        flatlistKey="isin"
        customItemComponents={customItemComponents}
      />
    </View>
  );
};

export default TableExample;
