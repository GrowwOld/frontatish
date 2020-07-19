import React from 'react';
import { View } from 'react-native';
import { UIViewProps } from './types';

const BottomFixedView = (props: UIViewProps) => {
  const { children, style } = props;
  return (
    <View style={{ ...style, position: 'absolute', bottom: 0, width: '100%' }}>
      {children}
    </View>
  );
};

export default BottomFixedView;
