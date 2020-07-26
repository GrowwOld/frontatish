import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
// eslint-disable-next-line import/no-unresolved
import { Dropdown, useColors } from 'supergroww';

const DropdownExample = () => {
  const Colors = useColors();
  const items = ['ITEM-A', 'ITEM-B', 'ITEM-C', 'ITEM-D'];
  const [active, setActive] = useState(0);
  const onChange = (index) => {
    console.log('index is', index);
    setActive(index);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.white,
        justifyContent: 'center',
      }}
    >
      <Dropdown dropItems={items} active={active} onChange={onChange} />
    </SafeAreaView>
  );
};

export default DropdownExample;
