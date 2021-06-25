import { StyleSheet } from 'react-native';
import Fonts from './fonts';
import { customScaleDimension } from '../common/utils';

const BaseStyles = StyleSheet.create({
  borderSecondaryBtn: {
    borderWidth: 1,
    // borderColor: Colors.GREEN_BLUE
  },
  borderTertiary: {
    borderWidth: 1,
    // borderColor: Colors.DARK_SILVER
  },
  grwButton: {
    height: customScaleDimension(50, 'height', 0.3),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  grwLabel: {
    fontFamily: Fonts.type.gotham_medium,
    fontSize: Fonts.size.regular_16,
    fontWeight: 'bold',
  },
  grwInfoBox: {
    minHeight: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
  },
  grwInfoBoxLabel: {
    fontFamily: Fonts.type.roboto,
    fontSize: Fonts.size.medium,
    fontWeight: 'normal',
  },
});

export default BaseStyles;
