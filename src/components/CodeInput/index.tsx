import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { withColors } from '../../themes';

interface CodeInputProps {
  value: string;
  codeLength: number;
  Colors: any;
}

interface CodeInputState {
  prevValue: string;
  codeInputValue: string[];
  activeInput: number;
}
const styles = StyleSheet.create({
  inputBox: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputUnderlined: {
    height: 50,
    width: 50,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class CodeInput extends React.PureComponent<CodeInputProps, CodeInputState> {
  constructor(props: CodeInputProps) {
    super(props);
    this.state = {
      prevValue: props.value,
      codeInputValue: [],
      activeInput: 0,
    };
  }

  static getDerivedStateFromProps(
    nextProps: CodeInputProps,
    prevState: CodeInputState,
  ) {
    console.log('next', nextProps.value, prevState.prevValue);
    if (nextProps.value !== prevState.prevValue) {
      // if new value is increasing that means new
      // number has been entered
      // if (nextProps.value.length > prevState.prevValue.length) {
      return {
        // converting the string to array of values
        // so that every index can hold one number
        codeInputValue: nextProps.value.split(''),
        activeInput: nextProps.value.length,
        prevValue: nextProps.value,
      };
    }
    return null;
  }

  renderInputUI = () => {
    const { codeLength, Colors } = this.props;
    const { codeInputValue, activeInput } = this.state;
    const ui = [];
    console.log('codeInputValue is', codeInputValue);
    for (let i = 0; i < codeLength; i += 1) {
      ui.push(
        <TouchableWithoutFeedback
          style={[
            styles.inputUnderlined,
            activeInput === i ? { borderBottomColor: Colors.primary } : null,
          ]}
          key={i.toString()}
          onPress={() => console.log('clicked box number', i + 1)}
        >
          <Text style={{ fontSize: 20 }}>{codeInputValue[i]}</Text>
        </TouchableWithoutFeedback>,
      );
    }
    return ui;
  };

  render() {
    // const { value, codeLength } = this.props;
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
        {this.renderInputUI()}
      </View>
    );
  }
}

export default withColors(CodeInput);
