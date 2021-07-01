import React from 'react';
import { View, Text, Animated } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import CodeInputStyles from './CodeInput.styles';
import { CodeInputProps, CodeInputState } from './CodeInput.types';
import { withTheme } from '../../themes';

let styles;
class CodeInput extends React.PureComponent<CodeInputProps, CodeInputState> {
  animatedValue: Animated.Value;

  // eslint-disable-next-line react/static-property-placement
  static defaultProps = {
    errorAnimation: true,
    codeLength: 6,
  };

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

  componentDidUpdate(prevProps: CodeInputProps) {
    if (prevProps?.keyStroke?.actionId !== this.props?.keyStroke?.actionId) {
      this.updateCodeInput();
    }

    if (
      prevProps.codeError !== this.props?.codeError &&
      this.props?.codeError &&
      this.props?.errorAnimation
    ) {
      this.shakeOnError();
    }
  }

  shakeOnError = () => {
    Animated.sequence([
      Animated.timing(this.animatedValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(this.animatedValue, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(this.animatedValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(this.animatedValue, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

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
      const updatedCode = codeInputValue.map((item, index) => {
        if (index === deletedIndex) return undefined;
        return item;
      });
      setCode(updatedCode.join(''));
      this.setState({
        activeInput: newActiveInput,
        codeInputValue: updatedCode,
      });
    }
  };

  renderInputUI = () => {
    const {
      codeLength,
      inputContainer,
      codeError,
      Mask,
      Colors,
      codeTextStyle,
    } = this.props;
    const { codeInputValue } = this.state;
    const ui = [];
    styles = CodeInputStyles(Colors!);
    for (let i = 0; i < codeLength; i += 1) {
      const lastInputStyle = i === codeLength - 1 ? { marginRight: 0 } : {};
      const errorBoxStyle = codeError ? styles.errorUnderlined : {};
      ui.push(
        <View
          style={[
            inputContainer === 'line'
              ? [styles.inputUnderlined, errorBoxStyle]
              : [styles.inputBox, errorBoxStyle],
            lastInputStyle,
          ]}
          key={i.toString()}
        >
          {codeInputValue[i] && Mask ? (
            <Mask />
          ) : (
            <Text style={[styles.codeTextStyle, { ...codeTextStyle }]}>
              {codeInputValue[i]}
            </Text>
          )}
        </View>,
      );
    }
    return ui;
  };

  renderErrorMsg = () => {
    const { codeError, errorTextStyle, Colors } = this.props;
    if (codeError) {
      return (
        <Text
          style={{
            // eslint-disable-next-line camelcase
            color: Colors?.semantic_red,
            marginTop: 10,
            ...errorTextStyle,
          }}
        >
          {codeError}
        </Text>
      );
    }
    return <Text style={{ marginTop: 10 }} />;
  };

  render() {
    const { Colors } = this.props;
    styles = CodeInputStyles(Colors!);
    return (
      <Animated.View
        style={{
          transform: [
            {
              translateX: this.animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [-10, 10],
              }),
            },
          ],
        }}
      >
        <View style={{ flexDirection: 'row' }}>{this.renderInputUI()}</View>
        {this.renderErrorMsg()}
      </Animated.View>
    );
  }
}

export default withTheme(CodeInput);
