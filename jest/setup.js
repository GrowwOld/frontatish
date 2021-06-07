jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon');
jest.mock('react-native-vector-icons/Ionicons', () => 'IonIcon');
jest.mock('react-native-vector-icons/Entypo', () => 'Icon');
jest.mock(
  'react-native-gesture-handler/touchables/TouchableHighlight',
  () => 'TouchableHighlight',
);
jest.mock(
  'react-native-gesture-handler/touchables/TouchableWithoutFeedback',
  () => 'TouchableWithoutFeedback',
);

// if you need to mock native compoenents

// jest.mock('react-native/Libraries/Components/View/View', () => 'View');
// jest.mock('react-native/Libraries/Text/Text', () => 'Text');
// jest.mock('react-native/Libraries/Components/Button', () => 'Button');
