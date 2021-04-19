import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { SwipableModalProps } from './types';
import Modal from 'react-native-modal';
import { Button } from 'frontatish';
import { ScrollView } from 'react-native-gesture-handler';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Ripple from 'react-native-material-ripple';

const SwipableModal = (props: SwipableModalProps) => {
  const { title } = props;
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <View
      style={{
        margin: 30,
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <Text>{title}</Text>
      <Modal
        isVisible={isOpen}
        backdropOpacity={0.3}
        swipeDirection="down"
        animationOutTiming={500}
        swipeThreshold={150}
        onSwipeComplete={closeModal}
        onBackdropPress={closeModal}
        onBackButtonPress={closeModal}
        propagateSwipe={true}
        coverScreen={true}
      >
        <View
          style={{
            padding: 5,
            backgroundColor: '#fff',
            borderRadius: 4,
            marginTop: 'auto',
            minHeight: 400,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View style={{ width: 32 }}></View>
            <View
              style={{
                borderWidth: 1,
                width: 50,
                marginBottom: 10,
              }}
            ></View>
            <Ripple
              style={{
                height: 32,
                width: 32,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
              }}
              rippleContainerBorderRadius={16}
              onPress={closeModal}
            >
              <IonIcon
                name="ios-close"
                size={20}
                // style={{ flex: 1, textAlign: 'center' }}
              />
            </Ripple>
          </View>
        </View>
      </Modal>
      <Button label="Open Modal" onPress={() => setIsOpen(true)} />
    </View>
  );
};

SwipableModal.defaultProps = {
  title: 'Hello',
};
export default SwipableModal;
