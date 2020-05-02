import React from 'react';

import { View, Text } from 'react-native';
import { Table } from '../components';
import { Fonts, getColors } from '../styles';
import { tableData } from './Mockdata';

interface TableExampleProps {
  isDark: boolean;
}
const TableExample = (props: TableExampleProps) => {
  const { isDark } = props;
  const Colors = getColors(isDark);
  return (
    <View style={{ flex: 1, marginHorizontal: 20 }}>
      <Text style={[Fonts.style.h4, { color: Colors.BLACK }]}>
        Table Example
      </Text>
      <Table
        data={tableData}
        isDark={isDark}
        title="Name"
        option="Market Price"
        leftKey="companyName"
        rightKey="marketPrice"
        flatlistKey="isin"
      />
    </View>
  );
};

export default TableExample;
