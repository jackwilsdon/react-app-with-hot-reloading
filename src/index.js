import './index.css';
import HotApp from './components/HotApp';
import React from 'react';
import { createStore } from './redux';
import { render } from 'react-dom';

const store = createStore();

render(<HotApp store={store} />, document.getElementById('root'));
