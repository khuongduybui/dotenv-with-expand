const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');

const parse = function() {
  const parsed = dotenv.parse.apply(undefined, arguments);
  dotenvExpand({ parsed });
  return parsed;
};

const config = function() {
  const env = dotenv.config.apply(undefined, arguments);
  dotenvExpand(env);
  return env;
};

module.exports.config = config
module.exports.parse = parse
