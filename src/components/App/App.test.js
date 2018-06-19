import App from './App';
import React from 'react';
import { createStore } from 'redux';
import identity from 'lodash/identity';
import { shallow } from 'enzyme';

it('renders correctly', () => {
  const store = createStore(identity, {});
  const tree = shallow(<App store={store} />);

  expect(tree).toMatchSnapshot();
});
