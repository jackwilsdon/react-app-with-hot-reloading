import './App.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Switch from '../Switch';

class App extends Component {
  static propTypes = {
    store: PropTypes.any.isRequired,
  };

  render() {
    return (
      <Provider store={this.props.store}>
        <Switch />
      </Provider>
    );
  }
}

export default App;
