import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { LIGHT_MODE_COLORS } from '../../styles/colorPalette';
import { ColorType } from '../../common/types';
import { withColors } from '../../themes';

interface CodeInputProps {
  value: string;
  codeLength: number;
  Colors?: ColorType;
  inputContainer: 'box' | 'line';
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
    marginRight: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedUnderLine: {
    height: 48,
    width: 40,
    marginRight: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  inputUnderlined: {
    height: 48,
    width: 40,
    marginRight: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: LIGHT_MODE_COLORS.primary,
    backgroundColor: LIGHT_MODE_COLORS.font_5,
  },
});

class CodeInput extends React.PureComponent<CodeInputProps, CodeInputState> {
  animatedValue: Animated.Value;

  constructor(props: CodeInputProps) {
    super(props);
    this.animatedValue = new Animated.Value(0);
    this.state = {
      prevValue: props.value,
      codeInputValue: [],
      activeInput: 0,
    };
    // this.startAnimation();
  }

  static getDerivedStateFromProps(
    nextProps: CodeInputProps,
    prevState: CodeInputState,
  ) {
    // console.log('next', nextProps.value, prevState.prevValue);
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

  componentDidUpdate(_prevProps: CodeInputProps, prevState: CodeInputState) {
    const { activeInput } = this.state;
    const { codeLength } = this.props;
    if (activeInput !== prevState.activeInput && activeInput < codeLength) {
      this.startAnimation(activeInput);
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
    const { codeLength, Colors, inputContainer } = this.props;
    const { codeInputValue, activeInput } = this.state;
    const ui = [];
    // console.log('codeInputValue is', codeInputValue);
    for (let i = 0; i < codeLength; i += 1) {
      const activeStyle =
        inputContainer === 'line'
          ? {
              borderBottomColor: Colors?.primary ?? LIGHT_MODE_COLORS.primary,
            }
          : // eslint-disable-next-line camelcase
            { borderColor: Colors?.font_1 ?? LIGHT_MODE_COLORS.font_1 };
      ui.push(
        <TouchableWithoutFeedback
          style={[
            inputContainer === 'line'
              ? styles.inputUnderlined
              : styles.inputBox,
            activeInput === i ? activeStyle : null,
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
      <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
        <Animated.View
          style={[
            inputContainer === 'line'
              ? styles.animatedUnderLine
              : styles.inputBox,
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
