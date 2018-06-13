import PropTypes from 'prop-types';
import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './App.css';
import Counter from '../Counter';
import { Provider } from 'react-redux';

class App extends Component {
  static propTypes = {
    store: PropTypes.any.isRequired,
  };

  render() {
    return (
      <Provider store={this.props.store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div className="App-intro">
            <Counter />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
