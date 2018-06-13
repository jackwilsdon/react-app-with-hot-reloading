import { Counter } from './Counter';
import React from 'react';
import noop from 'lodash/noop';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Counter onAdd={noop} onSubtract={noop} value={12345} />,
  );

  expect(tree).toMatchSnapshot();
});
