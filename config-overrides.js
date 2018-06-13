const rewireEslint = require('react-app-rewire-eslint');
const rewireHotLoader = require('react-app-rewire-hot-loader');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const flow = require('lodash/flow');

const rewireStyleLint = (config, env) => {
  return env === 'production'
    ? config
    : {
        ...config,
        plugins: [...(config.plugins || []), new StyleLintPlugin()],
      };
};

module.exports = flow(
  rewireEslint,
  rewireHotLoader,
  rewireStyleLint,
);
