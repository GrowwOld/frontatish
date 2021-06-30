import React, { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import { Modal, Button, useColors } from 'frontatish';

const ModalScreen = () => {
  const Colors = useColors();
  const [open, setOpen] = useState(false);

  const close = () => {
    setOpen(false);
  };

  const getChildren = () => {
    return (
      <Text style={{ fontSize: 20, color: Colors.font_1 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet
        accumsan lorem. Vivamus non tincidunt erat, sodales sagittis neque.
        Donec tempus ex risus, non fringilla nibh imperdiet id. In scelerisque
        ante orci, quis efficitur libero molestie eget. Aliquam tincidunt rutrum
        libero non iaculis. Cras efficitur massa ac sapien fermentum porta.
        Pellentesque eu facilisis arcu, vel porttitor urna. Morbi blandit quam
        neque, sit amet blandit arcu vulputate porta. Suspendisse imperdiet est
        in ante congue, a aliquet odio interdum. Donec eu massa mattis,
        vulputate dolor nec, faucibus sem. Fusce ac erat eu nibh fringilla
        ultricies. Nullam consequat nisi tellus, vel ornare diam varius
        tincidunt. Etiam id lacus sit amet enim vestibulum molestie. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Donec eu tellus et magna scelerisque aliquet. Etiam lacinia
        malesuada diam, eget efficitur risus. Maecenas congue tincidunt enim at
        dictum. Proin non accumsan massa, nec fermentum ante. Nam posuere
        volutpat nunc vel malesuada. Nam accumsan metus aliquet, vehicula urna
        in, imperdiet libero. Sed a tempor nisl. Quisque congue eu nisi sit amet
        luctus. Mauris a ante eu nibh aliquet dictum a eu nisi. Nunc nec
        eleifend massa. Praesent sit amet imperdiet erat, non vulputate urna.
        Proin consequat placerat velit, quis interdum orci vulputate et. Donec
        venenatis urna libero, efficitur fermentum ligula aliquam ac. Etiam
        velit lectus, venenatis et eros id, lobortis egestas ex.
      </Text>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* <ScrollView style={{ width: '100%' }}> */}
      <Modal
        open={open}
        onModalClose={close}
        contentHeight={400}
        swipeThreshold={100}
        position="top"
        entryDirection="up"
        onBackdropPressClose
        onBackButtonPressClose
        hasCloseButton
        swipeable
      >
        {getChildren()}
      </Modal>
      <View style={{ width: '100%' }}>
        <Button label="Open" onPress={() => setOpen(true)} />
      </View>
    </SafeAreaView>
  );
};

export default ModalScreen;
