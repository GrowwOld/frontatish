import { ColorType } from '../../common/types';

export interface CodeInputProps {
  value: string;
  codeLength: number;
  Colors?: ColorType;
  inputContainer: 'box' | 'line';
  onCodeSet: (code: string) => void;
  enteredKey: string;
  input: {
    value: string;
    actionType: 'insert' | 'delete';
  };
}

export interface CodeInputState {
  prevValue: string;
  codeInputValue: string[];
  activeInput: number;
  manualEdit: boolean;
}
