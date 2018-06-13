const rewireEslint = require('react-app-rewire-eslint');
const rewireHotLoader = require('react-app-rewire-hot-loader');
const flow = require('lodash/flow');

module.exports = flow(
  rewireEslint,
  rewireHotLoader,
);
