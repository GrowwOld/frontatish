import React from 'react';

import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// eslint-disable-next-line import/no-unresolved
import { Table, Ripple } from 'supergroww';
// import { Fonts, getColors } from '../styles';
import { tableData } from './fixtures';

interface TableExampleProps {
  isDark: boolean;
}
interface MrpItemProps {
  item: any;
  onPress?: () => void;
}
const TableExample = (props: TableExampleProps) => {
  const { isDark } = props;
  // const Colors = getColors(isDark);
  const MrpItem = (MrpProps: MrpItemProps) => {
    const { item, onPress } = MrpProps;
    const prefix = item.dayChange > 0 ? '+' : '';
    return (
      <Ripple
        style={{ flex: 1, alignItems: 'flex-end', paddingVertical: 16 }}
        onPress={onPress}
      >
        <Text>{item.marketPrice}</Text>
        <Text>
          {`${prefix} ${item.dayChange.toFixed(
            2,
          )} (${item.dayChangePerc.toFixed(2)})`}
        </Text>
      </Ripple>
    );
  };
  // key should be exactly the same as option keys
  // so that it can be correctly mapped
  const customRightItemComponents = { marketPrice: MrpItem };
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 20 }}>
      <Text>Table Example</Text>
      <Table
        data={tableData}
        isDark={isDark}
        title="Name"
        option={['marketPrice', 'holding', 'industryName']}
        optionLabel={['Market Price', 'Holding', 'Sector']}
        leftKey="companyName"
        flatlistKey="isin"
        customRightItemComponents={customRightItemComponents}
      />
    </SafeAreaView>
  );
};

export default TableExample;
