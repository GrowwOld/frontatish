// base and lib imports
import { Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
// utils and helpers

import { StyleType } from '../../common/types';
import { InfoBoxProps } from './types';
import { getInfoBoxStyles, getLabelStyles, getIconStyles } from './helper';

// styles and themes
import { useColors } from '../../themes';

const InfoBox = (props: InfoBoxProps) => {
  const { label, backgroundColor, icon, borderColor, style, textStyle } = props;
  // getting the suitable color based on the theme
  // activated inside the app
  const Colors = useColors();
  // getting base button styles defined
  // by our design guidelines, component
  // also takes custom styles so that can also
  // be applied
  const baseInfoBoxStyles: StyleType = getInfoBoxStyles(
    backgroundColor,
    borderColor,
    Colors,
  );
  const mainInfoBoxStyles: StyleType = {
    ...baseInfoBoxStyles,
    ...style,
  };
  const baseLabelStyles: StyleType = getLabelStyles(backgroundColor, Colors);
  const mainLabelStyles: StyleType = {
    ...baseLabelStyles,
    ...textStyle,
  };
  const iconStyles: StyleType = getIconStyles(backgroundColor, Colors);

  return (
    <View style={mainInfoBoxStyles}>
      {icon ? <Icon name="exclamationcircle" style={iconStyles} /> : null}
      <Text style={mainLabelStyles}>{label}</Text>
    </View>
  );
};

export default InfoBox;
