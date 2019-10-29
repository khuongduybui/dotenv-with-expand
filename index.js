const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');

exports.parse = function() {
  const parsed = dotenv.parse.apply(undefined, arguments);
  dotenvExpand({ parsed });
  return parsed;
};

exports.config = function() {
  const env = dotenv.config.apply(undefined, arguments);
  dotenvExpand(env);
  return env;
};
