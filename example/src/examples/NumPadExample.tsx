import React, { Component } from 'react';
import { View } from 'react-native';

// eslint-disable-next-line import/no-unresolved
import { NumPad, withColors, CodeInput } from 'frontatish';
import { SafeAreaView } from 'react-native-safe-area-context';

// import { Fonts, getColors } from '../styles';

interface NumPadExampleState {
  input: string;
  enteredKey: string;
}
interface NumPadExampleProps {
  isDark: boolean;
  Colors: any;
}
class NumPadExample extends Component<NumPadExampleProps, NumPadExampleState> {
  codeLength: number;

  constructor(props: NumPadExampleProps) {
    super(props);
    this.state = { input: '', enteredKey: '' };
    this.codeLength = 4;
  }

  // onItemClick
  onItemClick = (input: { value: string; actionType: string }) => {
    this.setState({ input });
    // if (input.length < this.codeLength) {
    //   this.setState({ input: input + value });
    // }
  };

  onDeleteItem = () => {
    const { input } = this.state;
    this.setState({ input: input.substring(0, input.length - 1) });
  };

  onCodeSubmit = (codeValue: string) => {
    // once everythis is entered
    this.setState({ input: codeValue });
  };

  render() {
    const { input, enteredKey } = this.state;
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
            value={input}
            codeLength={this.codeLength}
            inputContainer="line"
            onCodeSet={this.onCodeSubmit}
            input={this.state.input}
          />
        </View>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <CodeInput
            value={input}
            codeLength={this.codeLength}
            inputContainer="box"
            onCodeSet={this.onCodeSubmit}
            enteredKey={enteredKey}
            input={this.state.input}
          />
        </View>

        <NumPad
          onItemClick={this.onItemClick}
          onSubmit={() => {
            if (this.state.input < 2) {
            }
          }}
        />
      </SafeAreaView>
    );
  }
}

export default withColors(NumPadExample);
