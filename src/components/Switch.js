import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getType } from '../selectors/router';

const Switch = ({ components, type }) => {
  const Component = components[type];

  return Component ? (
    <Component />
  ) : (
    <Fragment>
      Can't find component for type <code>{type}</code>
    </Fragment>
  );
};

Switch.propTypes = {
  components: PropTypes.objectOf(PropTypes.any),
};

Switch.defaultProps = {
  components: {},
};

const mapStateToProps = state => ({ type: getType(state) });
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Switch);
