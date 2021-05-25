import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { LIGHT_MODE_COLORS } from '../../styles/colorPalette';
import { withColors } from '../../themes';
import { CodeInputProps, CodeInputState } from './types';

const styles = StyleSheet.create({
  inputBox: {
    width: 40,
    height: 48,
    borderWidth: 2,
    borderColor: LIGHT_MODE_COLORS.primary_attr_40,
    marginRight: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedInputBox: {
    width: 40,
    height: 48,
    borderWidth: 2.5,
    borderColor: LIGHT_MODE_COLORS.primary,
    marginRight: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedUnderLine: {
    height: 48,
    width: 40,
    marginRight: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2.5,
    borderBottomColor: LIGHT_MODE_COLORS.primary,
  },
  inputUnderlined: {
    height: 48,
    width: 40,
    marginRight: 18,
    justifyContent: 'center',
    alignItems: 'center',
    // borderBottomWidth: 2,
    // borderBottomColor: LIGHT_MODE_COLORS.primary_attr_40,
    backgroundColor: LIGHT_MODE_COLORS.font_5,
  },
});

class CodeInput extends React.PureComponent<CodeInputProps, CodeInputState> {
  animatedValue: Animated.Value;

  constructor(props: CodeInputProps) {
    super(props);
    this.animatedValue = new Animated.Value(0);
    this.state = {
      codeInputValue: [],
      activeInput: 0,
    };
  }

  updateCodeInput = (props: CodeInputProps, state) => {
    const { codeInputValue, activeInput } = this.state;
    if (props.input.actionType === 'insert' && activeInput < props.codeLength) {
      const x = [...codeInputValue];
      x[activeInput] = props.input.value;
      props.onCodeSet(x.join(''));
      this.setState({
        codeInputValue: x,
        activeInput: activeInput + 1,
      });
    } else if (props.input.actionType === 'delete' && activeInput >= 0) {
      let d;
      let newActiveInput = activeInput === 0 ? activeInput : activeInput - 1;
      if (codeInputValue[activeInput]) {
        d = activeInput;
      } else {
        d = activeInput - 1;
      }
      const updated = codeInputValue.map((item, index) => {
        if (index === d) return undefined;
        else return item;
      });
      props.onCodeSet(updated.join(''));
      this.setState({
        activeInput: newActiveInput,
        codeInputValue: updated,
      });
    }
  };

  componentDidUpdate(_prevProps: CodeInputProps, prevState: CodeInputState) {
    const { activeInput } = this.state;
    const { codeLength } = this.props;
    if (activeInput !== prevState.activeInput && activeInput < codeLength) {
      this.startAnimation(activeInput);
    }
    if (_prevProps.value !== this.props.value) {
      this.updateCodeInput(this.props, this.state);
    }
  }

  startAnimation = (toValue: number) => {
    Animated.timing(this.animatedValue, {
      toValue,
      duration: 250,
      useNativeDriver: true,
      // speed: 3,
    }).start(() => this.animatedValue.setValue(toValue));
  };

  renderInputUI = () => {
    const { codeLength, /* Colors */ inputContainer } = this.props;
    const { codeInputValue /* activeInput */ } = this.state;
    const ui = [];

    for (let i = 0; i < codeLength; i += 1) {
      const lastInputStyle = i === codeLength - 1 ? { marginRight: 0 } : {};
      // const activeStyle =
      //   inputContainer === 'line'
      //     ? {
      //         borderBottomColor: Colors?.primary ?? LIGHT_MODE_COLORS.primary,
      //       }
      //     : // eslint-disable-next-line camelcase
      //       { borderColor: Colors?.font_1 ?? LIGHT_MODE_COLORS.font_1 };
      ui.push(
        <TouchableWithoutFeedback
          style={[
            inputContainer === 'line'
              ? styles.inputUnderlined
              : styles.inputBox,
            lastInputStyle,
          ]}
          key={i.toString()}
          onPress={() => this.setActiveInputBox(i)}
        >
          <Text style={{ fontSize: 20 }}>{codeInputValue[i]}</Text>
        </TouchableWithoutFeedback>,
      );
    }
    return ui;
  };

  setActiveInputBox = (index: number) => {
    this.props.onCodeSet(index);

    this.setState({ activeInput: index });
  };

  render() {
    const { Colors, inputContainer } = this.props;
    const { activeInput } = this.state;
    const prevActiveInput = activeInput - 1;
    const translator = 58; // (width + margin-right)
    const prevXDistance = prevActiveInput * translator;
    const currentXDistance = activeInput * translator;
    return (
      <View style={{ flexDirection: 'row' }}>
        <Animated.View
          style={[
            inputContainer === 'line'
              ? styles.animatedUnderLine
              : styles.animatedInputBox,
            {
              position: 'absolute',
              left: 0,
              zIndex: 1,
              borderBottomColor: Colors?.primary ?? LIGHT_MODE_COLORS.primary,
              borderColor: Colors?.primary ?? LIGHT_MODE_COLORS.primary,
              transform: [
                {
                  translateX: this.animatedValue.interpolate({
                    inputRange: [activeInput - 1, activeInput],
                    outputRange: [prevXDistance, currentXDistance],
                  }),
                },
              ],
            },
          ]}
        />
        {this.renderInputUI()}
      </View>
    );
  }
}

export default withColors(CodeInput);
