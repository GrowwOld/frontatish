import { Platform } from 'react-native';

const type = {
  base: 'Avenir-Book',
  bold: 'Avenir-Black',
  notoserif: 'notoserif',
  sans_serif: 'sans-serif',
  sans_serif_light: 'sans-serif-light',
  sans_serif_thin: 'sans-serif-thin',
  sans_serif_condensed: 'sans-serif-condensed',
  sans_serif_medium: 'sans-serif-medium',
  serif: 'serif',
  roboto: 'Roboto',
  monospace: 'monospace',
  // gotham_book:'GothamBook',
  // gotham_bold:'GothamBold',
  // gotham_medium:'GothamMedium',
  gotham_book: Platform.OS === 'ios' ? 'Avenir-Book' : 'roboto.regular',
  gotham_bold: Platform.OS === 'ios' ? 'Avenir-Book' : 'roboto.bold',
  gotham_medium: Platform.OS === 'ios' ? 'Avenir-Book' : 'roboto.medium',
};

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 15,
  regular_16: 16,
  regular_17: 17,
  medium_15: 15,
  medium: 14,
  small_13: 13,
  small: 12,
  small_11: 11,
  mini: 10,
  tiny: 8.5,
  large_Heading: 20,
  section_heading: 18,
  primary_text: 13
};

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2
  },
  h3: {
    fontFamily: type.base,
    fontSize: size.h3
  },
  h4: {
    fontFamily: type.base,
    fontSize: size.h4
  },
  h5: {
    fontFamily: type.base,
    fontSize: size.h5
  },
  h6: {
    fontFamily: type.notoserif,
    fontSize: size.h6
  },
  normal: {
    fontFamily: type.gotham_book,
    fontSize: size.regular
  },
  description: {
    fontFamily: type.gotham_book,
    fontSize: size.medium
  }
}

export default {
  type,
  size,
  style
};
