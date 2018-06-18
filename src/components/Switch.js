import React, { Fragment } from 'react';
import components from '../router/components';
import { connect } from 'react-redux';
import { getType } from '../selectors/router';

const Switch = ({ type }) => React.createElement(components[type] || Fragment);

const mapStateToProps = state => ({ type: getType(state) });
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Switch);
