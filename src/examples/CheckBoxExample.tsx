import React from 'react';
import { View } from 'react-native';
import { CheckBox } from '../components';

interface CheckBoxExampleProps {
  isDark: boolean;
}
const CheckBoxExample = (props: CheckBoxExampleProps) => {
  const { isDark } = props;
  return (
    <View style={{ flex: 1, margin: 20 }}>
      <CheckBox isDark={isDark} />
    </View>
  );
};

export default CheckBoxExample;
