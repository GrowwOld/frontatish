import { CodeInputProps, CodeInputState } from './types';

export const setCodeArray = (props: CodeInputProps, state: CodeInputState) => {
  const { value } = props;
  const { activeInput } = state;

  // console.log('activeinput touched', activeInputTouched);
  const codeArray = value.split('');

  codeArray[activeInput] = props.enteredKey;
  // console.log('code arr', codeArray);
  props.onCodeSet(codeArray.join(''));
  return codeArray;
};

export const tempUtil = () => {};
