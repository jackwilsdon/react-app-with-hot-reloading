import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HotApp from './app/components/HotApp';
import { createStore } from './redux';

const store = createStore();

ReactDOM.render(<HotApp store={store} />, document.getElementById('root'));
