import NamedCounter from './NamedCounter';
import React from 'react';
import noop from 'lodash/noop';
import { shallow } from 'enzyme';

it('renders correctly', () => {
  const tree = shallow(
    <NamedCounter
      name="Counter name"
      onAdd={noop}
      onSubtract={noop}
      value={12345}
    />,
  );

  expect(tree).toMatchSnapshot();
});
