import React from 'react';
import {
  TextInput,
  TextInputProps,
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
// eslint-disable-next-line import/no-unresolved

import { withColors } from '../../themes';
import { StyleType, ColorType } from '../../common/types';

let styles: any;
interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  disabled?: string;
  labelStyle?: StyleType;
  inputTextStyle?: StyleType;
  disabledTextStyle?: StyleType;
  containerStyle?: StyleType;
  bottomBorderStyle?: StyleType;
  Colors?: any;
}

interface InputState {
  active: boolean;
}

class Input extends React.PureComponent<InputProps, InputState> {
  textInput: React.RefObject<TextInput>;

  constructor(props: InputProps) {
    super(props);
    this.state = { active: false };
    this.textInput = React.createRef();
  }

  setActive = (active: boolean) => {
    this.setState({ active });
  };

  setFocus = () => {
    this.textInput?.current?.focus();
  };

  getBottomBorderStyles = () => {
    const { bottomBorderStyle, Colors, error } = this.props;
    const { active } = this.state;
    let mergedStyle;
    if (error) {
      mergedStyle = [
        bottomBorderStyle,
        {
          height: 2,
          // marginTop: 4,
          backgroundColor: Colors.semantic_red,
        },
      ];
    } else if (active) {
      mergedStyle = [
        bottomBorderStyle,
        {
          height: 2,
          // marginTop: 4,
          backgroundColor: Colors.primary,
        },
      ];
    } else {
      mergedStyle = [
        bottomBorderStyle,
        {
          height: 1,
          // marginTop: 4,
          backgroundColor: Colors.font_5,
        },
      ];
    }
    return mergedStyle;
  };

  render() {
    const {
      label,
      error,
      containerStyle,
      labelStyle,
      Colors,
      disabled,
      disabledTextStyle,
      inputTextStyle,
    } = this.props;
    styles = getStyles(Colors);
    const bottomBorderStyles = this.getBottomBorderStyles();
    const textInputStyle = disabled
      ? { ...styles.disabledTextStyle, ...disabledTextStyle }
      : { ...styles.inputTextStyle, ...inputTextStyle };
    return (
      <TouchableWithoutFeedback onPress={this.setFocus}>
        <View style={[styles.containerStyle, containerStyle]}>
          <Text style={[styles.lableStyle, labelStyle]}>{label}</Text>
          <TextInput
            {...this.props}
            style={textInputStyle}
            // eslint-disable-next-line no-return-assign
            ref={this.textInput}
            editable={!disabled}
            onFocus={() => this.setActive(true)}
            onBlur={() => this.setActive(false)}
          />
          <View style={bottomBorderStyles} />
          {error && <Text style={styles.errorStyle}>{error}</Text>}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const getStyles = (Colors: ColorType) => {
  return StyleSheet.create({
    containerStyle: { padding: 20 },
    lableStyle: { color: Colors.font_2, marginBottom: 8, fontWeight: '500' },
    errorStyle: { color: Colors.semantic_red, marginTop: 4, fontWeight: '500' },
    inputTextStyle: { color: Colors.font_1 },
    disabledTextStyle: { color: Colors.font_3 },
  });
};

export default withColors(Input);
