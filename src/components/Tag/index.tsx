import React from 'react';
import { Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import Ripple from 'react-native-material-ripple';
import { ColorType } from '../../common/types';
import { useColors } from '../../themes';
import { Fonts } from '../../styles';

interface TagProps {
  onPress?: () => void;
  tagTitle: string;
  containerStyle: ViewStyle;
  tagTextStyle: TextStyle;
}
const Tag = (props: TagProps) => {
  const { onPress, tagTitle, containerStyle, tagTextStyle } = props;
  const Colors = useColors();
  const styles = getStyles(Colors);
  return (
    <Ripple style={[styles.tagContainer, containerStyle]} onPress={onPress}>
      <Text style={[styles.tagText, tagTextStyle]}>{tagTitle}</Text>
    </Ripple>
  );
};

const getStyles = (Colors: ColorType) => {
  return StyleSheet.create({
    tagContainer: {
      padding: 4,
      borderRadius: 4,
      backgroundColor: Colors.primary_attr_40,
    },
    tagText: {
      fontSize: Fonts.size.small,
      fontWeight: 'bold',
      color: Colors.white,
    },
  });
};

export default Tag;
