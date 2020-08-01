import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useColors } from '../../themes';
import { Fonts } from '../../styles';
import { ColorType } from '../../common/types';

const Searchbar = () => {
  const Colors = useColors();
  const styles = getStyles(Colors);
  return (
    <View style={styles.searchbarContainer}>
      <Text style={styles.placeholderText}>Search the components</Text>
      <Icon
        name="search"
        size={20}
        color={Colors.font_3}
        style={{ flex: 1, textAlign: 'right' }}
      />
    </View>
  );
};

const getStyles = (Colors: ColorType) => {
  return StyleSheet.create({
    searchbarContainer: {
      flexDirection: 'row',
      padding: 12,
      backgroundColor: Colors.white,
      borderRadius: 5,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
    placeholderText: {
      fontSize: Fonts.size.small_13,
      // fontWeight: 'bold',
      color: Colors.font_3,
    },
  });
};

export default Searchbar;
