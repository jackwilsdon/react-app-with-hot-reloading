import './Counter.css';
import { decrement, increment } from '../../actions';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { getValue } from '../../selectors/counter';

export const Counter = ({ onSubtract, onAdd, value }) => (
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

const mapStateToProps = state => ({
  value: getValue(state),
});

const mapDispatchToProps = {
  onAdd: increment,
  onSubtract: decrement,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
