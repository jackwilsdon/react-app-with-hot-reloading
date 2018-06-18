const rewireEslint = require('react-app-rewire-eslint');
const rewireHotLoader = require('react-app-rewire-hot-loader');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const partial = require('lodash/partial');
const { injectBabelPlugin } = require('react-app-rewired');

// Custom "flow" function for passing environment to every function.
const flow = (...functions) => (config, env) =>
  functions.reduce(
    (previousConfig, nextFunction) => nextFunction(previousConfig, env),
    config,
  );

const rewireStyleLint = (config, env) => {
  return env === 'production'
    ? config
    : {
        ...config,
        plugins: [
          ...(config.plugins || []),
          new StyleLintPlugin({ files: ['src/**/*.css'] }),
        ],
      };
};

module.exports = flow(
  rewireEslint,
  rewireHotLoader,
  rewireStyleLint,
  partial(injectBabelPlugin, 'transform-export-default-name'),
);
