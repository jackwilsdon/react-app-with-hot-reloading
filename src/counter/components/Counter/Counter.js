import { decrement, getValue, increment } from '../../ducks';
import React from 'react';
import { connect } from 'react-redux';
import './Counter.css';

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
