import { StyleSheet } from 'react-native';
import { ColorType } from '../../common/types';

const CodeInputStyles = (Colors: ColorType) => {
  return StyleSheet.create({
    inputBox: {
      width: 40,
      height: 48,
      borderWidth: 2,
      borderColor: Colors.primary_attr_40,
      marginRight: 18,
      justifyContent: 'center',
      alignItems: 'center',
    },
    animatedInputBox: {
      width: 40,
      height: 48,
      borderWidth: 2.5,
      borderColor: Colors.primary,
      marginRight: 18,
      justifyContent: 'center',
      alignItems: 'center',
    },
    animatedUnderLine: {
      height: 48,
      width: 38,
      marginRight: 16,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 2.5,
      borderBottomColor: Colors.primary,
    },
    inputUnderlined: {
      height: 48,
      width: 38,
      marginRight: 16,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 2,
      borderBottomColor: Colors.primary,
      backgroundColor: Colors.font_5,
    },
    errorUnderlined: {
      borderBottomWidth: 2.5,
      borderBottomColor: Colors.semantic_red,
    },
    codeTextStyle: {
      fontSize: 20,
      color: Colors.primary,
    },
  });
};

export default CodeInputStyles;
