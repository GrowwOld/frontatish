// import React, { useState } from 'react';
// import { Text, View } from 'react-native';
// import { Popup, Button } from '../components';
// import { getColors, Fonts } from '../styles';

// interface PopupExampleProps {
//   isDark: boolean;
//   isOpen: boolean;
//   children: React.ReactNode;
//   closePopup: () => void;
// }
// const PopupExample = (props: PopupExampleProps) => {
//   const [show, setShow] = useState(false);
//   const { isDark, isOpen, closePopup, children } = props;

//   // to handle dynamic content inside popup
//   // which is needed to be shown inside the
//   // popup on some user action
//   const handleShowClick = () => setShow(!show);
//   const Colors = getColors(isDark);
//   return (
//     <View>
//       <Popup
//         isOpen={isOpen}
//         isDark={isDark}
//         position="bottom"
//         closePopup={closePopup}
//         swipeDirection="down"
//         swipeThreshold={10}
//         childrenContainerStyle={{ backgroundColor: Colors.WHITE }}
//       >
//         <View style={{ padding: 20 }}>
//           <Text
//             style={[
//               Fonts.style.h5,
//               { marginVertical: 20, color: Colors.BLACK },
//             ]}
//           >
//             This popup contains the custom keypad component
//           </Text>
//           <Button
//             isDark={isDark}
//             label={!show ? 'Show Numpad' : 'Hide Numpad'}
//             onPress={handleShowClick}
//             type="secondary"
//           />
//           {show && children}
//         </View>
//       </Popup>
//     </View>
//   );
// };

// // const styles = StyleSheet.create({
// //   bottomFixed: { flex: 1, backgroundColor: '#fff' },
// //   fake: { flex: 1 },
// // });
// export default PopupExample;
