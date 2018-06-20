const config = require('./webpack.config.dev');
const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
const ignoredFiles = require('react-dev-utils/ignoredFiles');
const paths = require('./paths');

module.exports = function(proxy, allowedHost) {
  return {
    compress: true,
    clientLogLevel: 'none',
    contentBase: paths.public,
    watchContentBase: true,
    hot: true,
    publicPath: config.output.publicPath,
    quiet: true,
    watchOptions: {
      ignored: ignoredFiles(paths.src),
    },
    https: process.env.HTTPS === 'true',
    host: process.env.HOST || '0.0.0.0',
    historyApiFallback: {
      disableDotRule: true,
    },
    public: allowedHost,
    proxy,
    before: app => app.use(errorOverlayMiddleware()),
  };
};
