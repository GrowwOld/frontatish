// example usage of button component
import * as React from 'react';
import { Alert, StyleSheet, View, Text } from 'react-native';

// eslint-disable-next-line import/no-unresolved
import { MessageBoard } from 'supergroww';
// import { Fonts, getColors } from '../styles';

interface MessageBoardExampleProps {
  isDark: boolean;
  //   openPopup: () => void;
}

const MessageBoardExample = (props: MessageBoardExampleProps) => {
  //   const { isDark, openPopup } = props;
  const { isDark } = props;
  //   const Colors = getColors(isDark);
  const handlePress = () => {
    Alert.alert('Handles click events if required');
  };
  return (
    <View style={styles.exampleMessageBoardContainer}>
      <Text style={[]}>Message Board Examples</Text>
      <View style={{ marginVertical: 20 }}>
        <MessageBoard
          message="Your documents are being processed. You can start investing in
        stocks in 24 hours."
          isDark={isDark}
          iconName="alarm"
        />
      </View>
      <View style={{ marginVertical: 20 }}>
        <MessageBoard
          message="Verify your email ID to start investing in stocks. This is a raised message."
          hasShadow
          backgroundColor="#ffe08a"
          fontColor="grey"
          onPress={handlePress}
          iconColour="grey"
        />
      </View>
      <View style={{ marginVertical: 20 }}>
        <MessageBoard
          message="Stocks account opening was not successful. Reupload video and selfie."
          backgroundColor="#44475b"
          fontColor="white"
          onPress={handlePress}
          iconName="report"
          iconColour="red"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  exampleMessageBoardContainer: {
    flex: 1,
    // justifyContent: 'space-evenly',
    margin: 20,
  },
  exampleBtnText: {},
});

export default MessageBoardExample;
