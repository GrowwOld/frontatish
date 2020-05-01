import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { Popup } from '../components';
import { getColors } from '../styles';

interface PopupExampleProps {
  isDark: boolean;
  isOpen: boolean;
  closePopup: () => void;
}
const PopupExample = (props: PopupExampleProps) => {
  const [show, setShow] = useState(false);
  const { isDark, isOpen, closePopup } = props;

  // to handle dynamic content inside popup
  // which is needed to be shown inside the
  // popup on some user action
  const handleShowClick = () => setShow(!show);
  const Colors = getColors(isDark);
  return (
    <View>
      <Popup
        isOpen={isOpen}
        isDark={isDark}
        position="bottom"
        closePopup={closePopup}
        swipeDirection="down"
        swipeThreshold={10}
        childrenContainerStyle={{ backgroundColor: Colors.WHITE }}
      >
        <View>
          <Text>Hello!</Text>
          <Button title="Fake output" onPress={handleShowClick} />
          {show && (
            <View>
              <Text>Vinit</Text>
              <Text>Vinit</Text>
              <Text>Vinit</Text>
              <Text>Vinit</Text>
              <Text>Vinit</Text>
              <Text>Vinit</Text>
              <Text>Vinit</Text>
              <Text>Vinit</Text>
              <Text>Vinit</Text>
            </View>
          )}
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
