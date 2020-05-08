import { NativeModules } from 'react-native';

type SupergrowwType = {
  multiply(a: number, b: number): Promise<number>;
};

const { Supergroww } = NativeModules;

export default Supergroww as SupergrowwType;
