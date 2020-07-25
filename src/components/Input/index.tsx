import React from 'react';
import {
  TextInput,
  TextInputProps,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import { withColors } from '../../themes';
import { StyleType, ColorType } from '../../common/types';

let styles: any;
interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  disabled?: string;
  disabledStyle: StyleType;
  containerStyle: StyleType;
  labelStyle: StyleType;
  bottomBorderStyle?: StyleType;
  Colors?: any;
}

interface InputState {
  active: boolean;
}

class Input extends React.PureComponent<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
    this.state = { active: false };
  }

  setFocus = (active: boolean) => {
    this.setState({ active });
  };

  getBottomBorderStyles = () => {
    const { bottomBorderStyle, Colors } = this.props;
    const { active } = this.state;
    let mergedStyle;
    if (active) {
      mergedStyle = [
        bottomBorderStyle,
        {
          height: 2,
          backgroundColor: Colors.primary,
        },
      ];
    } else {
      mergedStyle = [
        bottomBorderStyle,
        {
          height: 1,
          backgroundColor: Colors.font_3,
        },
      ];
    }
    return mergedStyle;
  };

  render() {
    const {
      label,
      containerStyle,
      placeholder,
      labelStyle,
      Colors,
    } = this.props;
    styles = getStyles(Colors);
    const bottomBorderStyles = this.getBottomBorderStyles();
    return (
      <View style={[styles.containerStyle, containerStyle]}>
        <Text style={[styles.lableStyle, labelStyle]}>{label}</Text>
        <TextInput
          placeholder={placeholder}
          onFocus={() => this.setFocus(true)}
          onBlur={() => this.setFocus(false)}
        />
        <View style={bottomBorderStyles} />
      </View>
    );
  }
}

const getStyles = (Colors: ColorType) => {
  return StyleSheet.create({
    containerStyle: { padding: 20 },
    lableStyle: { color: Colors.font_2 },
    bottomBorder: {
      height: 2,
      marginVertical: 4,
    },
  });
};

export default withColors(Input);
