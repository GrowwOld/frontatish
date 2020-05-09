import React, { useState } from 'react';
import { Text, View } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import { Popup } from 'supergroww';
import NumPadExample from './NumPadExample';
// import { getColors, Fonts } from '../styles';

const PopupExample = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  // to handle dynamic content inside popup
  // which is needed to be shown inside the
  // popup on some user action
  const handleShowClick = () => setShow(!show);
  // const Colors = getColors(isDark);
  return (
    <View>
      <Text onPress={() => setOpen(true)}>Show Popup</Text>
      <Popup
        isOpen={open}
        position="bottom"
        closePopup={() => setOpen(false)}
        swipeDirection="down"
        swipeThreshold={10}
        childrenContainerStyle={{ backgroundColor: '#fff' }}
      >
        <View style={{ padding: 20 }}>
          <Text onPress={handleShowClick}>
            {!show ? 'Show Numpad' : 'Hide Numpad'}
          </Text>
          {show && <NumPadExample isDark={false} />}
        </View>
      </Popup>
    </View>
  );
};

// const styles = StyleSheet.create({
//   bottomFixed: { flex: 1, backgroundColor: '#fff' },
//   fake: { flex: 1 },
// });
export default PopupExample;
