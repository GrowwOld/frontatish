import React, { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { Modal, Button, useColors } from 'frontatish';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';

const ModalExample = () => {
  const Colors = useColors();
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };
  const children = () => {
    return (
      <View style={{ flex: 1 }}>
        <Text
          style={{ textAlign: 'center', fontSize: 24, color: Colors.font_1 }}
        >
          Hello
        </Text>
        <Text
          style={{ fontSize: 20, letterSpacing: 0.2, color: Colors.font_1 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae
          libero id tellus aliquet accumsan vitae eget purus. Proin est mauris,
          imperdiet quis hendrerit non, pellentesque nec ipsum. Morbi hendrerit
          libero eget lectus feugiat, ac interdum eros suscipit. Integer ac
          lorem accumsan turpis fringilla mattis vehicula sed nisl. Nam lacinia
          quam id arcu sodales vehicula. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Cras volutpat nunc et sollicitudin molestie.
          Quisque dignissim, ligula ac iaculis porta, lectus ipsum dictum risus,
          a semper nisl orci non eros. Ut rhoncus nibh turpis, sed ullamcorper
          nunc sodales sit amet. Donec bibendum massa turpis, ac aliquam nisl
          efficitur a. Vivamus in magna et neque sagittis imperdiet in sit amet
          massa. Maecenas porttitor hendrerit arcu sed mattis. Curabitur
          convallis scelerisque aliquet. Mauris condimentum sem a vulputate
          commodo. Sed in tincidunt ex, quis fringilla libero. Donec nec
          venenatis urna. Praesent mattis massa vel ante pretium ornare. Aenean
          euismod suscipit vehicula. Nunc ante mi, egestas sit amet convallis a,
          pellentesque et nisl. Curabitur cursus rutrum ante, vitae elementum
          justo sagittis vitae. Aenean sagittis a massa consequat sollicitudin.
          Vivamus vulputate viverra pulvinar. Vivamus tempus lobortis pharetra.
          Nunc arcu sem, ullamcorper in diam ut, sodales lacinia ex. Aliquam
          ultricies orci id pellentesque facilisis. Maecenas venenatis, diam a
          pellentesque ullamcorper, nibh mauris suscipit mi, ac tempor velit
          lacus ut ipsum. Integer congue tellus in sodales pharetra. Sed
          ullamcorper purus non augue feugiat pellentesque. Integer sollicitudin
          luctus dolor, eu blandit nisi bibendum eget. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam
          nunc est, mollis et nulla et, mollis lobortis felis. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Nam vitae libero id tellus
          aliquet accumsan vitae eget purus. Proin est mauris, imperdiet quis
          hendrerit non, pellentesque nec ipsum. Morbi hendrerit libero eget
          lectus feugiat, ac interdum eros suscipit. Integer ac lorem accumsan
          turpis fringilla mattis vehicula sed nisl. Nam lacinia quam id arcu
          sodales vehicula. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Cras volutpat nunc et sollicitudin molestie. Quisque
          dignissim, ligula ac iaculis porta, lectus ipsum dictum risus, a
          semper nisl orci non eros. Ut rhoncus nibh turpis, sed ullamcorper
          nunc sodales sit amet. Donec bibendum massa turpis, ac aliquam nisl
          efficitur a. Vivamus in magna et neque sagittis imperdiet in sit amet
          massa. Maecenas porttitor hendrerit arcu sed mattis. Curabitur
          convallis scelerisque aliquet. Mauris condimentum sem a vulputate
          commodo. Sed in tincidunt ex, quis fringilla libero. Donec nec
          venenatis urna. Praesent mattis massa vel ante pretium ornare. Aenean
          euismod suscipit vehicula. Nunc ante mi, egestas sit amet convallis a,
          pellentesque et nisl. Curabitur cursus rutrum ante, vitae elementum
          justo sagittis vitae. Aenean sagittis a massa consequat sollicitudin.
          Vivamus vulputate viverra pulvinar. Vivamus tempus lobortis pharetra.
          Nunc arcu sem, ullamcorper in diam ut, sodales lacinia ex. Aliquam
          ultricies orci id pellentesque facilisis. Maecenas venenatis, diam a
          pellentesque ullamcorper, nibh mauris suscipit mi, ac tempor velit
          lacus ut ipsum. Integer congue tellus in sodales pharetra. Sed
          ullamcorper purus non augue feugiat pellentesque. Integer sollicitudin
          luctus dolor, eu blandit nisi bibendum eget. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam
          nunc est, mollis et nulla et, mollis lobortis felis.
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Modal
        isOpen={isOpen}
        onBackButtonPress={closeModal}
        onSwipeComplete={closeModal}
        onBackdropPress={closeModal}
        backdropOpacity={0.4}
        onCloseButtonPress={closeModal}
        componentStyle={{
          height: 600,
        }}
      >
        {children()}
      </Modal>
      <View
        style={{
          flex: 1,
          marginHorizontal: 20,
          justifyContent: 'center',
        }}
      >
        <Text style={{ textAlign: 'center', fontSize: 20, marginBottom: 20 }}>
          Modal Example
        </Text>
        <Button label="Open Modal" onPress={() => setIsOpen(true)} />
      </View>
    </SafeAreaView>
  );
};

export default ModalExample;
