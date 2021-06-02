import { ColorType } from '../../common/types';
import { keyStrokeType } from '../NumPad/types';

export interface CodeInputProps {
  value: string;
  codeLength: number;
  Colors?: ColorType;
  inputContainer: 'box' | 'line';
  setCode: (code: string) => void;
  keyStroke?: keyStrokeType;
  codeError: string;
}

export interface CodeInputState {
  codeInputValue: Array<string | undefined>;
  activeInput: number;
}
