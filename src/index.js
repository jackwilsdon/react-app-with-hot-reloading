import './index.css';
import HotApp from './components/HotApp';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from './redux';

const store = createStore();

ReactDOM.render(<HotApp store={store} />, document.getElementById('root'));
