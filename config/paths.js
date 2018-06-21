const { resolve } = require('path');
const { realpathSync } = require('fs');

const appDirectory = realpathSync(process.cwd());
const resolveApp = relativePath => resolve(appDirectory, relativePath);

module.exports = {
  build: resolveApp('build'),
  public: resolveApp('public'),
  html: resolveApp('public/index.html'),
  clientIndex: resolveApp('src/client/index.js'),
  client: resolveApp('src/client'),
  shared: resolveApp('src/shared'),
  package: resolveApp('package.json'),
  src: resolveApp('src'),
  yarnLock: resolveApp('yarn.lock'),
  nodeModules: resolveApp('node_modules'),
};
