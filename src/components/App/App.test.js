import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';

const rootReducer = () => ({});

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = createStore(rootReducer);

  ReactDOM.render(<App store={store} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
