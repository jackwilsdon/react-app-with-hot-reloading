import './App.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Switch from '../Switch';
import components from '../../router/components';

class App extends Component {
  static propTypes = {
    store: PropTypes.any.isRequired,
  };

  render() {
    return (
      <Provider store={this.props.store}>
        <Switch components={components} />
      </Provider>
    );
  }
}

export default App;
