import './Counter.css';
import { decrement, increment } from '../../actions';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { getValue } from '../../selectors/counter';

const Counter = ({ onSubtract, onAdd, value }) => (
  <div className="Counter">
    <button className="Counter__button" onClick={() => onSubtract()}>
      -
    </button>
    <div className="Counter__value">{value}</div>
    <button className="Counter__button" onClick={() => onAdd()}>
      +
    </button>
  </div>
);

Counter.propTypes = {
  onSubtract: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  value: PropTypes.any,
};

Counter.defaultProps = {
  value: null,
};

const mapStateToProps = (state, { identifier }) => ({
  value: getValue(state, identifier),
});

const mapDispatchToProps = (dispatch, { identifier }) => ({
  onAdd: () => dispatch(increment(identifier)),
  onSubtract: () => dispatch(decrement(identifier)),
});

const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);

ConnectedCounter.propTypes = {
  identifier: PropTypes.string,
};

ConnectedCounter.defaultProps = {
  identifier: 'default',
};

export { Counter };

export default ConnectedCounter;
