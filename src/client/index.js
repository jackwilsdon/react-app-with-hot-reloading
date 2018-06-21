import './index.css';
import HotApp from '../shared/components/HotApp';
import React from 'react';
import { createStore } from '../shared/redux';
import { render } from 'react-dom';

const store = createStore();

render(<HotApp store={store} />, document.getElementById('root'));
