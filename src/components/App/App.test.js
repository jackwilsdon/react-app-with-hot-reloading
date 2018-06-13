import App from './App';
import React from 'react';
import { createStore } from 'redux';
import identity from 'lodash/identity';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const store = createStore(identity, {});
  const tree = renderer.create(<App store={store} />).toJSON();

  expect(tree).toMatchSnapshot();
});
