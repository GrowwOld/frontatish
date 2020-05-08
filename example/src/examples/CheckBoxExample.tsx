// import React, { useState } from 'react';
// import { View, Text } from 'react-native';
// import { CheckBox } from '../components';
// import { Fonts, getColors } from '../styles';

// interface CheckBoxExampleProps {
//   isDark: boolean;
// }
// const CheckBoxExample = (props: CheckBoxExampleProps) => {
//   const { isDark } = props;
//   const [checked, setChecked] = useState(false);
//   const onCheckBoxClick = () => setChecked(!checked);
//   const Colors = getColors(isDark);
//   return (
//     <View style={{ flex: 1, margin: 20 }}>
//       <Text style={[Fonts.style.h4, { color: Colors.BLACK }]}>
//         CheckBox Examples
//       </Text>
//       <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
//         <CheckBox
//           isDark={isDark}
//           checked={checked}
//           onPress={onCheckBoxClick}
//           containerStyle={{ marginRight: 20 }}
//         />
//         <CheckBox
//           isDark={isDark}
//           checked
//           disabled
//           containerStyle={{ marginHorizontal: 20 }}
//         />
//         <CheckBox
//           isDark={isDark}
//           disabled
//           containerStyle={{ marginHorizontal: 20 }}
//         />
//       </View>
//     </View>
//   );
// };

// export default CheckBoxExample;
