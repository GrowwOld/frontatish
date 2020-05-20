/* eslint-disable no-empty */
import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native';
// eslint-disable-next-line import/order
// eslint-disable-next-line import/no-unresolved
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Fonts, getColors } from '../../styles';
import { MessageBoardProps } from './types';

const MessageBoard = (props: MessageBoardProps) => {
  const {
    message,
    backgroundColor,
    fontColor,
    isDark,
    hasShadow,
    onPress,
    iconName,
    iconColour,
    customStyles,
  } = props;

  if (isDark) {
  }
  if (customStyles) {
  }

  const BaseStyles = StyleSheet.create({
    shadowedMessageStyle: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor,
      borderRadius: 15,
      padding: 7,
      shadowColor: '#000',
      shadowOffset: { width: 100, height: 100 },
      shadowOpacity: 1,
      shadowRadius: 10,
      elevation: 13,
    },
    normalMessageStyle: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor,
      borderRadius: 15,
      padding: 7,
    },
  });

  // Add custom styles

  return (
    <TouchableWithoutFeedback onPressIn={onPress}>
      <View
        style={
          hasShadow
            ? BaseStyles.shadowedMessageStyle
            : BaseStyles.normalMessageStyle
        }
      >
        <View style={{ flex: 4, margin: 10 }}>
          <Text
            style={{
              color: fontColor,
              lineHeight: 25,
              fontFamily: Fonts.type.roboto,
              fontSize: Fonts.size.regular_17,
            }}
          >
            {message}
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10,
          }}
        >
          <View
            style={{
              width: 70,
              height: 70,
              borderRadius: 70 / 2,
              backgroundColor: '#ffffff',
              marginRight: 10,
            }}
          >
            <Icon
              name={iconName}
              size={40}
              color={iconColour}
              style={{ marginLeft: 15, margin: 15 }}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const TempColors = getColors(false);

MessageBoard.defaultProps = {
  message: 'asfafaf',
  backgroundColor: TempColors.SPRING_GREEN,
  fontColor: TempColors.floral_white,
  isDark: false,
  hasShadow: false,
  onPress: null,
  iconName: 'favorite',
  iconColour: 'black',
  customStyles: {},
};

export default MessageBoard;
