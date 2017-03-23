const util = require('util');

module.exports = function (data, options = null) {
  if (!options) {
    options = {
      depth: 4,
      colors: true,
    };
  };

  console.log(util.inspect(data, options))
}
