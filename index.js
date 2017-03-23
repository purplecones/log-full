const util = require('util');

console.logFull = function (data, options = {}) {
  const defaultOptions = {
    depth: null,
    colors: true,
  };

  console.log(util.inspect(data, Object.assign(defaultOptions, options)))
}
