import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { Popup } from '../components';

interface PopupExampleProps {
  isDark: boolean;
}
const PopupExample = (props: PopupExampleProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const { isDark } = props;
  // to close the popup
  const closePopup = () => setIsOpen(false);
  // to handle dynamic content inside popup
  // which is needed to be shown inside the
  // popup on some user action
  const handleShowClick = () => setShow(!show);
  return (
    <View>
      <Button onPress={() => setIsOpen(true)} title="Show modal" />
      <Popup
        isOpen={isOpen}
        isDark={isDark}
        position="bottom"
        closePopup={closePopup}
        swipeDirection={['down', 'up']}
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
