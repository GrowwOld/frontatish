import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { EmptyViewProps } from './types';
import Button from '../Button';
import { Fonts } from '../../styles';
import { ColorType } from '../../common/types';
import { useColors } from '../../themes';

const EmptyView = (props: EmptyViewProps) => {
  const {
    illustration,
    title,
    titleStyle,
    subTitle,
    subTitleStyle,
    actionTitle,
    actionPress,
  } = props;
  const Colors = useColors();
  const styles = getStyles(Colors);
  const renderIllustration = () => {
    if (illustration) {
      return illustration;
    }
    return (
      <View
        style={{
          height: 150,
          width: 150,
          alignSelf: 'center',
          backgroundColor: Colors.font_1,
        }}
      />
    );
  };
  return (
    <View style={{}}>
      {renderIllustration()}
      <View style={{ marginVertical: 30 }}>
        <Text style={[styles.titleText, titleStyle]}>{title}</Text>
        <Text style={[styles.subTitleText, subTitleStyle]}>{subTitle}</Text>
      </View>
      <Button label={actionTitle} onPress={actionPress} type="secondary" />
    </View>
  );
};

const getStyles = (Colors: ColorType) => {
  return StyleSheet.create({
    titleText: {
      fontSize: Fonts.size.h5,
      color: Colors.font_1,
      marginBottom: 10,
      fontWeight: 'bold',
      lineHeight: 25,
      textAlign: 'center',
    },
    subTitleText: {
      fontSize: Fonts.size.small_13,
      color: Colors.font_1,
      lineHeight: 18,
      letterSpacing: 0.2,
      textAlign: 'center',
    },
  });
};
export default EmptyView;
