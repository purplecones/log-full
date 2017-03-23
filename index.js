const util = require('util');

console.logFull = function (data, options = null) {
  if (!options) {
    options = {
      depth: 4,
      colors: true,
    };
  };
  console.log(util.inspect(data, options))
}
