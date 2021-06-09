import { StyleSheet } from 'react-native';
import { ColorType } from '../../common/types';
import { Fonts } from '../../styles';

const getStyles = (Colors: ColorType) => {
  return StyleSheet.create({
    searchbarContainer: {
      flexDirection: 'row',
      padding: 12,
      backgroundColor: Colors.white,
      borderRadius: 39,
      borderWidth: 1,
      borderColor: Colors.font_4,
    },
    placeholderText: {
      fontSize: Fonts.size.regular_17,
      color: Colors.font_3,
      paddingHorizontal: 5,
      paddingVertical: 0,
      flex: 4,
    },
    textInput: {
      flex: 4,
      paddingHorizontal: 5,
      paddingVertical: 0,
      fontSize: Fonts.size.regular_17,
      color: Colors.font_1,
    },
  });
};

export default getStyles;
