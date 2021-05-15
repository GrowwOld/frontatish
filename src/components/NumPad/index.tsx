// base and lib imports
import React from 'react';
import { StyleSheet, Text, FlatList, View } from 'react-native';
import Ripple from 'react-native-material-ripple';
// eslint-disable-next-line import/no-unresolved
import Icon from 'react-native-vector-icons/MaterialIcons';

// utils and helpers
import { NumPadProps } from './types';
import { Fonts } from '../../styles';
import { useColors } from '../../themes';

const NumPad = (props: NumPadProps) => {
  const { onItemClick, onDeleteItem, onSubmit } = props;
  const numberRange = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'X',
    '0',
    '.',
  ];

  const onButtonPress = (item: any) => {
    switch (item) {
      case 'X':
        return onDeleteItem();
      case '.':
        return onSubmit();
      default:
        return onItemClick(item);
    }
  };

  const Colors = useColors();
  return (
    <View>
      <FlatList
        data={numberRange}
        horizontal={false}
        scrollEnabled={false}
        // contentContainerStyle={styles.numPadContainerStyle}
        numColumns={3}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Ripple
            style={styles.rippleContainer}
            rippleContainerBorderRadius={20}
            rippleOpacity={0.2}
            onPress={() => onButtonPress(item)}
          >
            {item === 'X' || item === '.' ? (
              <Icon
                name={item === 'X' ? 'backspace' : 'check'}
                color={Colors.primary}
                size={Fonts.size.h3}
              />
            ) : (
              <Text style={[styles.numberText, { color: Colors.primary }]}>
                {item}
              </Text>
            )}
          </Ripple>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  numberText: {
    fontFamily: Fonts.type.gotham_medium,
    fontSize: Fonts.size.h3,
  },
  rippleContainer: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // numPadContainerStyle: {
  //   shadowRadius: 2,
  //   shadowOffset: {
  //     width: 0,
  //     height: -3,
  //   },
  //   shadowColor: '#000000',
  //   elevation: 4,
  // },
});

export default NumPad;
