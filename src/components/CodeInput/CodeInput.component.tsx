import React from 'react';
import { View, Text, Animated } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import CodeInputStyles from './CodeInput.styles';
import { CodeInputProps, CodeInputState } from './CodeInput.types';
import { withColors } from '../../themes';
import { LIGHT_MODE_COLORS } from '../../styles/colorPalette';

let styles;
class CodeInput extends React.PureComponent<CodeInputProps, CodeInputState> {
  animatedValue: Animated.Value;

  // eslint-disable-next-line react/static-property-placement
  static defaultProps: CodeInputProps;

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

  renderInputUI = () => {
    const { codeLength, inputContainer, codeError, Mask, Colors } = this.props;
    const { codeInputValue } = this.state;
    const ui = [];
    styles = CodeInputStyles(Colors!);
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
          {codeInputValue[i] && Mask ? (
            <Mask />
          ) : (
            <Text style={styles.codeTextStyle}>{codeInputValue[i]}</Text>
          )}
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

CodeInput.defaultProps = {
  errorAnimation: true,
};
export default withColors(CodeInput);
