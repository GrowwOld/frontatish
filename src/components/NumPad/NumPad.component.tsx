// base and lib imports
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  TouchableOpacity,
} from 'react-native';
// eslint-disable-next-line import/no-unresolved
import Icon from 'react-native-vector-icons/MaterialIcons';

// utils and helpers
import { NumPadProps } from './NumPad.types';
import { Fonts } from '../../styles';
import { useColors } from '../../themes';

const NumPad = (props: NumPadProps) => {
  const { onItemClick, onSubmit } = props;
  const [actionId, setActionId] = useState(0);
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

  const onButtonPress = (item: string) => {
    setActionId(actionId + 1);
    switch (item) {
      case 'X':
        return onItemClick({
          value: item,
          actionType: 'delete',
          actionId,
        });
      case '.':
        return onSubmit();
      default:
        return onItemClick({
          value: item,
          actionType: 'insert',
          actionId,
        });
    }
  };

  const Colors = useColors();
  return (
    <View>
      <FlatList
        data={numberRange}
        horizontal={false}
        scrollEnabled={false}
        numColumns={3}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.rippleContainer}
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
          </TouchableOpacity>
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
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NumPad;
