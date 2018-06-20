const { basename } = require('path');

module.exports = {
  process: (src, filename) =>
    `module.exports = ${JSON.stringify(basename(filename))};`,
};
