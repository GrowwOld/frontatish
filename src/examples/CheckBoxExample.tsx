import React, { useState } from 'react';
import { View } from 'react-native';
import { CheckBox } from '../components';

interface CheckBoxExampleProps {
  isDark: boolean;
}
const CheckBoxExample = (props: CheckBoxExampleProps) => {
  const { isDark } = props;
  const [checked, setChecked] = useState(false);
  const onCheckBoxClick = () => setChecked(!checked);
  return (
    <View style={{ flex: 1, margin: 20, flexDirection: 'row' }}>
      <CheckBox
        isDark={isDark}
        checked={checked}
        onPress={onCheckBoxClick}
        containerStyle={{ marginRight: 20, marginTop: 20 }}
      />
      <CheckBox
        isDark={isDark}
        checked
        disabled
        containerStyle={{ marginHorizontal: 20, marginTop: 20 }}
      />
      <CheckBox
        isDark={isDark}
        disabled
        containerStyle={{ marginHorizontal: 20, marginTop: 20 }}
      />
    </View>
  );
};

export default CheckBoxExample;
