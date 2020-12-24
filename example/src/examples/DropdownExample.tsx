import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
// eslint-disable-next-line import/no-unresolved
import { Dropdown, useColors } from 'frontatish';

const DropdownExample = () => {
  const Colors = useColors();
  const items = [
    { value: 'AN', label: 'ANDAMAN & NICOBAR ISLANDS' },
    { value: 'AP', label: 'ANDHRA PRADESH' },
    { value: 'AR', label: 'ARUNACHAL PRADESH' },
    { value: 'AS', label: 'ASSAM' },
    { value: 'BH', label: 'BIHAR' },
  ];
  const [active, setActive] = useState(0);
  const onChange = (index: number) => {
    setActive(index);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.white,
        // justifyContent: 'center',
      }}
    >
      <Dropdown
        items={items}
        active={active}
        onChange={onChange}
        itemStyle={{
          fontWeight: '500',
        }}
        activeItemStyle={{
          fontWeight: '900',
        }}
      />
      <Dropdown items={items} active={active} onChange={onChange} />
    </SafeAreaView>
  );
};

export default DropdownExample;
