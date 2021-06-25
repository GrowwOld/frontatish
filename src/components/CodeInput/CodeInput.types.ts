import { TextStyle } from 'react-native';
import { ColorType } from '../../common/types';
import { keyStrokeType } from '../NumPad/NumPad.types';

export interface CodeInputProps {
  value: string;
  codeLength: number;
  Colors?: ColorType;
  inputContainer: 'box' | 'line';
  setCode: (code: string) => void;
  keyStroke?: keyStrokeType;
  codeError?: string;
  Mask?: React.ComponentType;
  errorAnimation?: boolean;
  errorTextStyle?: TextStyle;
  codeTextStyle?: TextStyle;
}

export interface CodeInputState {
  codeInputValue: Array<string | undefined>;
  activeInput: number;
}
