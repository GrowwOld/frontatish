import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { getColors } from '../../styles';
import { CheckBoxProps } from './types';

const Checkbox = (props: CheckBoxProps) => {
  const { isDark } = props;
  const Colors = getColors(isDark);
  return <Ionicons name="md-checkmark" size={16} color={Colors.GREEN_BLUE} />;
};

export default Checkbox;
