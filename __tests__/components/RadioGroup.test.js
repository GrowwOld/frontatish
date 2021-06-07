import 'react-native';
import React from 'react';

import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { RadioGroup, RadioButton } from '../../src/components';

it('Renders Correctly', () => {
  const tree = toJson(
    shallow(
      <RadioGroup>
        <RadioButton value="value1" />
        <RadioButton value="value2" />
      </RadioGroup>,
    ),
  );
  expect(tree).toMatchSnapshot();
});

it('RadioButton onPress Triggers', () => {
  const onPressFn = jest.fn();
  const component = shallow(<RadioButton value="test" onPress={onPressFn} />);
  component.simulate('press');
  expect(onPressFn).toBeCalledWith('test');
});

it('RadioGroup state updates correctly', () => {
  const component = shallow(
    <RadioGroup>
      <RadioButton value="value1" />
      <RadioButton value="value2" />
      <RadioButton value="value3" />
    </RadioGroup>,
  );

  component.find(RadioButton).at(0).prop('onPress')('value1'); // press RadioButton 1

  const radioButtons = component.find(RadioButton);
  radioButtons.forEach((radioButton) => {
    if (radioButton.prop('value') === 'value1')
      expect(radioButton.prop('selected')).toBeTruthy();
    else expect(radioButton.prop('selected')).toBeFalsy();
  });
});
