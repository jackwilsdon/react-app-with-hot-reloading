import { Counter } from './Counter';
import React from 'react';
import noop from 'lodash/noop';
import { shallow } from 'enzyme';

it('renders correctly', () => {
  const tree = shallow(
    <Counter onAdd={noop} onSubtract={noop} value={12345} />,
  );

  expect(tree).toMatchSnapshot();
});
