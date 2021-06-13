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
    // const { activeInput } = this.state;
    // const { codeLength } = this.props;
    // if (activeInput !== prevState.activeInput && activeInput < codeLength) {
    //   this.startAnimation(activeInput);
    // }
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
    const { activeInput } = this.state;
    styles = CodeInputStyles(Colors!);
    return (
      <>
        <View style={{ flexDirection: 'row' }}>{this.renderInputUI()}</View>
        {this.renderErrorMsg()}
      </>
    );
  }
}

export default withColors(CodeInput);
