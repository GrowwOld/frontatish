import React, { Component } from 'react';
import { View } from 'react-native';

// eslint-disable-next-line import/no-unresolved
import { NumPad, withColors, CodeInput, keyStrokeType } from 'frontatish';
import { SafeAreaView } from 'react-native-safe-area-context';

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
    this.codeLength = 6;
  }

  // onItemClick
  onItemClick = (keyStroke?: keyStrokeType) => {
    this.setState({ keyStroke, codeError: '' });
  };

  setCode = (value: string) => {
    // once everythis is entered
    this.setState({ value });
  };

  onSubmit = () => {
    const { value } = this.state;
    if (value.length < this.codeLength) {
      console.log('error is');
      this.setState({ codeError: 'Incorrect Code' });
    }
    if (value.length === this.codeLength) {
      this.setState({ codeError: '' });
    }
  };

  render() {
    const { keyStroke, codeError } = this.state;
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
            keyStroke={keyStroke!}
            codeLength={this.codeLength}
            inputContainer="line"
            setCode={this.setCode}
            value="124567"
            codeError={codeError}
          />
        </View>

        <NumPad onItemClick={this.onItemClick} onSubmit={this.onSubmit} />
      </SafeAreaView>
    );
  }
}

export default withColors(NumPadExample);
