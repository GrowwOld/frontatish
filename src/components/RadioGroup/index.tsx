import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import RadioButton from '../RadioButton';
import { RadioGroupProps } from './types';

const RadioGroup = ({
  onChange,
  defaultValue,
  size,
  containerStyle,
  labelStyle,
  children,
  style,
}: RadioGroupProps) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  useEffect(() => onChange(selectedValue!), [selectedValue]);

  return (
    <View style={style} accessibilityRole="radiogroup">
      {children?.map((radioButton, index) => (
        <RadioButton
          key={index}
          size={size}
          containerStyle={containerStyle}
          labelStyle={labelStyle}
          {...radioButton.props}
          onPress={(value) => setSelectedValue(value)}
          selected={radioButton.props?.value === selectedValue}
        />
      ))}
    </View>
  );
};

RadioGroup.defaultProps = {
  size: 'sm',
};

export default RadioGroup;
