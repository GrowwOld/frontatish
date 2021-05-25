import React, { Component } from 'react';
import { View } from 'react-native';

// eslint-disable-next-line import/no-unresolved
import { NumPad, withColors, CodeInput } from 'frontatish';
import { SafeAreaView } from 'react-native-safe-area-context';

type keyStrokeType = {
  value: string;
  actionType: 'insert' | 'delete';
  actionId: number;
};
interface NumPadExampleState {
  keyStroke: keyStrokeType | undefined;
  value: string;
  codeError: string;
}
interface NumPadExampleProps {
  isDark: boolean;
  Colors: any;
}
class NumPadExample extends Component<NumPadExampleProps, NumPadExampleState> {
  codeLength: number;

  constructor(props: NumPadExampleProps) {
    super(props);
    this.state = { keyStroke: undefined, value: '', codeError: '' };
    this.codeLength = 4;
  }

  // onItemClick
  onItemClick = (keyStroke?: keyStrokeType) => {
    this.setState({ keyStroke });
  };

  setCode = (value: string) => {
    // once everythis is entered
    this.setState({ value });
  };

  onSubmit = () => {
    const { value } = this.state;
    if (parseInt(value, 10) < this.codeLength) {
      this.setState({ codeError: 'Incorrect Code' });
    }
  };

  render() {
    const { value, keyStroke, codeError } = this.state;
    const { Colors } = this.props;
    return (
      <SafeAreaView
        style={{
          flex: 1,
          // justifyContent: 'flex-end',
          backgroundColor: Colors.white,
        }}
      >
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <CodeInput
            keyStroke={keyStroke}
            codeLength={this.codeLength}
            inputContainer="line"
            setCode={this.setCode}
            value={value}
            codeError={codeError}
          />
        </View>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <CodeInput
            value={value}
            keyStroke={keyStroke}
            codeLength={this.codeLength}
            inputContainer="box"
            setCode={this.setCode}
            codeError={codeError}
          />
        </View>

        <NumPad onItemClick={this.onItemClick} onSubmit={this.onSubmit} />
      </SafeAreaView>
    );
  }
}

export default withColors(NumPadExample);
