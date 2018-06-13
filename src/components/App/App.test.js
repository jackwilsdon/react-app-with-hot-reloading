import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import identity from 'lodash/identity';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = createStore(identity, {});

  ReactDOM.render(<App store={store} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
