// base and lib imports
import React from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';
import Ripple from 'react-native-material-ripple';

// utils and helpers
import { NumPadProps } from './types';
import { Fonts, getColors } from '../../styles';

const NumPad = (props: NumPadProps) => {
  const { onItemClick, onDeleteItem, isDark } = props;
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
    '.',
    '0',
    'X',
  ];
  // return (

  //   <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start'}}>
  //     {numberRange.map((value) => (
  //       <NumberItem value={value} key={value} />
  //     ))}
  //   </View>
  // );
  const Colors = getColors(isDark);
  return (
    <FlatList
      data={numberRange}
      horizontal={false}
      scrollEnabled={false}
      numColumns={3}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <Ripple
          style={{
            flex: 1,
            padding: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          rippleContainerBorderRadius={20}
          onPress={item === 'X' ? onDeleteItem : () => onItemClick(item)}
        >
          <Text style={[styles.numberText, { color: Colors.BLACK }]}>
            {item}
          </Text>
        </Ripple>
      )}
    />
  );
};

const styles = StyleSheet.create({
  numberText: {
    fontFamily: Fonts.type.gotham_medium,
    fontSize: Fonts.size.h3,
  },
});

export default NumPad;
