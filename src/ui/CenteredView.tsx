import React from 'react';
import { View } from 'react-native';
import { UIViewProps } from './types';

const CenteredView = (props: UIViewProps) => {
  const { children, style } = props;
  return (
    <View
      style={{
        ...style,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </View>
  );
};

export default CenteredView;
