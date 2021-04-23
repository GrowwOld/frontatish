import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { SwipableModalProps } from './types';
import Modal from 'react-native-modal';
import { Button } from 'frontatish';
import { ScrollView } from 'react-native-gesture-handler';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Ripple from 'react-native-material-ripple';
import Modalbox from 'react-native-modalbox';
import { useColors } from '../../themes';

const SwipableModal = (props: SwipableModalProps) => {
  const Colors = useColors();
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
        backgroundColor: 'red',
      }}
    >
      <Text>{title}</Text>
      <Modal
        isVisible={isOpen}
        backdropOpacity={0.3}
        swipeDirection="down"
        animationOutTiming={500}
        swipeThreshold={Dimensions.get('window').height / 8}
        onSwipeComplete={closeModal}
        onBackdropPress={closeModal}
        onBackButtonPress={closeModal}
        propagateSwipe={true}
        coverScreen={true}
        style={{
          margin: 0,
        }}
      >
        {/* <Modalbox
        isOpen={isOpen}
        backButtonClose
        onClosed={closeModal}
        coverScreen
        swipeThreshold={150}
        style={{
          borderRadius: 4,
          maxHeight: 600,
          bottom: 0,
          position: 'absolute',
        }}
      > */}
        <View
          style={{
            padding: 5,
            flex: 1,
            backgroundColor: Colors.white,
            borderRadius: 4,
            bottom: 0,
            position: 'absolute',
            width: '100%',
            maxHeight: Dimensions.get('window').height / 2,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: Colors.font_6,
            }}
          >
            <View style={{ width: 32 }}></View>
            <View
              style={{
                borderWidth: 1,
                width: 50,
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
                size={24}
                // style={{ flex: 1, textAlign: 'center' }}
              />
            </Ripple>
          </View>
          {/* <ScrollView>
            <Text style={{ flex: 1, fontSize: 100 }}>Hello</Text>
            <Text style={{ flex: 1, fontSize: 100 }}>Hello</Text>
            <Text style={{ flex: 1, fontSize: 100 }}>Hello</Text>
            <Text style={{ flex: 1, fontSize: 100 }}>Hello</Text>
            <Text style={{ flex: 1, fontSize: 100 }}>Hello</Text>
            <Text style={{ flex: 1, fontSize: 100 }}>Hello</Text>
          </ScrollView> */}
        </View>
        {/* </Modalbox> */}
      </Modal>
      <Button label="Open Modal" onPress={() => setIsOpen(true)} />
    </View>
  );
};

SwipableModal.defaultProps = {
  title: 'Hello',
};
export default SwipableModal;
