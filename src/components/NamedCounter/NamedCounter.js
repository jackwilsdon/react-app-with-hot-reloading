import Counter from '../Counter';
import PropTypes from 'prop-types';
import React from 'react';

const NamedCounter = ({ name, ...props }) => (
  <div className="NamedCounter">
    {name && <label className="NamedCounter__label">{name}</label>}
    <div className="NamedCounter__counter">
      <Counter {...props} />
    </div>
  </div>
);

NamedCounter.propTypes = {
  name: PropTypes.string,
};

NamedCounter.defaultProps = {
  name: null,
};

export default NamedCounter;
