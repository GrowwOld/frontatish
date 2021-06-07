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
    width: 38,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2.5,
    borderBottomColor: LIGHT_MODE_COLORS.primary,
  },
  inputUnderlined: {
    height: 48,
    width: 38,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
    // borderBottomWidth: 2,
    // borderBottomColor: LIGHT_MODE_COLORS.primary_attr_40,
    backgroundColor: LIGHT_MODE_COLORS.font_5,
  },
  errorUnderlined: {
    borderBottomWidth: 2.5,
    borderBottomColor: LIGHT_MODE_COLORS.semantic_red,
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

  componentDidMount() {
    const { value } = this.props;
    if (value) {
      this.setState({
        codeInputValue: value.split(''),
        activeInput: value.length - 1,
      });
    }
  }

  componentDidUpdate(prevProps: CodeInputProps, prevState: CodeInputState) {
    const { activeInput } = this.state;
    const { codeLength } = this.props;
    if (activeInput !== prevState.activeInput && activeInput < codeLength) {
      this.startAnimation(activeInput);
    }
    if (prevProps?.keyStroke?.actionId !== this.props?.keyStroke?.actionId) {
      this.updateCodeInput();
    }
  }

  updateCodeInput = () => {
    const { codeInputValue, activeInput } = this.state;
    const { keyStroke, setCode, codeLength } = this.props;
    if (keyStroke?.actionType === 'insert' && activeInput < codeLength) {
      const updatedCodeInput = [...codeInputValue];
      updatedCodeInput[activeInput] = keyStroke?.value;
      setCode(updatedCodeInput.join(''));
      this.setState({
        codeInputValue: updatedCodeInput,
        activeInput: activeInput + 1,
      });
    } else if (keyStroke?.actionType === 'delete' && activeInput >= 0) {
      let deletedIndex: number;
      let newActiveInput = activeInput === 0 ? activeInput : activeInput - 1;
      if (codeInputValue[activeInput]) {
        deletedIndex = activeInput;
        newActiveInput = activeInput;
      } else {
        deletedIndex = activeInput - 1;
      }
      const updated = codeInputValue.map((item, index) => {
        if (index === deletedIndex) return undefined;
        return item;
      });
      setCode(updated.join(''));
      this.setState({
        activeInput: newActiveInput,
        codeInputValue: updated,
      });
    }
  };

  startAnimation = (toValue: number) => {
    Animated.timing(this.animatedValue, {
      toValue,
      duration: 250,
      useNativeDriver: true,
      // speed: 3,
    }).start(() => this.animatedValue.setValue(toValue));
  };

  renderInputUI = () => {
    const { codeLength, inputContainer, codeError } = this.props;
    const { codeInputValue } = this.state;
    const ui = [];

    for (let i = 0; i < codeLength; i += 1) {
      const lastInputStyle = i === codeLength - 1 ? { marginRight: 0 } : {};
      const errorBoxStyle = codeError ? styles.errorUnderlined : {};
      ui.push(
        <TouchableWithoutFeedback
          style={[
            inputContainer === 'line'
              ? [styles.inputUnderlined, errorBoxStyle]
              : [styles.inputBox, errorBoxStyle],
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
    this.setState({ activeInput: index });
  };

  renderErrorMsg = () => {
    const { codeError, errorStyle } = this.props;
    if (codeError) {
      return (
        <Text
          style={{
            color: LIGHT_MODE_COLORS.semantic_red,
            marginTop: 10,
            ...errorStyle,
          }}
        >
          {codeError}
        </Text>
      );
    }
    return <Text style={{ marginTop: 10 }} />;
  };

  render() {
    const { Colors, inputContainer, codeError } = this.props;
    const { activeInput } = this.state;
    const prevActiveInput = activeInput - 1;
    const translator = 54; // (width + margin-right)
    const prevXDistance = prevActiveInput * translator;
    const currentXDistance = activeInput * translator;
    const errorBoxStyle = codeError ? styles.errorUnderlined : {};
    return (
      <>
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
              errorBoxStyle,
            ]}
          />
          {this.renderInputUI()}
        </View>
        {this.renderErrorMsg()}
      </>
    );
  }
}

export default withColors(CodeInput);
