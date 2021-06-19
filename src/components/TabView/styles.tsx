import { StyleSheet } from 'react-native';
import { ColorType } from '../../common/types';

const getStyles = (Colors: ColorType) => {
  return StyleSheet.create({
    tabsRoot: {
      flexDirection: 'row',
    },
    tabText: { textAlign: 'center', marginBottom: 10 },
    sliderLine: {
      height: '100%',
    },
    fullWidthLine: {
      backgroundColor: Colors.font_5,
      height: 4,
    },
    container: {
      marginVertical: 10,
    },
  });
};

export default getStyles;
