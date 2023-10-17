DEPRECATION NOTICE

Support for `.env` file is now a builtin feature of Node.js.
See https://nodejs.org/en/blog/release/v20.6.0#built-in-env-file-support


# dotenv-with-expand

![npm](https://img.shields.io/npm/v/dotenv-with-expand)
![npm downloads](https://img.shields.io/npm/dt/dotenv-with-expand)
![npm license](https://img.shields.io/npm/l/dotenv-with-expand)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/khuongduybui/dotenv-with-expand.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/khuongduybui/dotenv-with-expand/context:javascript)

This is a drop-in replacement for [dotenv](https://www.npmjs.com/package/dotenv) but with preloaded [dotenv-expand](https://www.npmjs.com/package/dotenv-expand) functionality.

## Install

```bash
# with npm
npm install dotenv-with-expand

# or with Yarn
yarn add dotenv-with-expand

# or with pnpm
pnpm install dotenv-with-expand
```

## Usage

As early as possible in your application, require and configure dotenv.

```javascript
require('dotenv-with-expand').config();
```

Create a `.env` file in the root directory of your project.
Add environment-specific variables on new lines in the form of `NAME=VALUE`.
For example:

```dosini
DB_HOST=localhost
DB_USER=root
DB_PASS=s1mpl3
DB_URI="${DB_USER}:${DB_PASS}@${DB_HOST}"
```

`process.env` now has the keys and values you defined in your `.env` file.

See [dotenv-expand](https://github.com/motdotla/dotenv-expand/blob/master/test/.env) for more substitution examples.

```javascript
const db = require('db');
db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
});
console.log(`connected to ${process.env.DB_URI}`);
```

### Preload

You can use the `--require` (`-r`) [command line option](https://nodejs.org/api/cli.html#cli_r_require_module) to preload dotenv. By doing this, you do not need to require and load dotenv in your application code. This is the preferred approach when using `import` instead of `require`.

```bash
$ node -r dotenv-with-expand/config your_script.js
```

The configuration options below are supported as command line arguments in the format `dotenv_config_<option>=value`

```bash
$ node -r dotenv-with-expand/config your_script.js dotenv_config_path=/custom/path/to/your/env/vars
```

Additionally, you can use environment variables to set configuration options. Command line arguments will precede these.

```bash
$ DOTENV_CONFIG_<OPTION>=value node -r dotenv-with-expand/config your_script.js
```

```bash
$ DOTENV_CONFIG_ENCODING=latin1 node -r dotenv-with-expand/config your_script.js dotenv_config_path=/custom/path/to/.env
```

## Config

`config` will read your `.env` file, parse the contents, assign it to
[`process.env`](https://nodejs.org/docs/latest/api/process.html#process_process_env),
and return an Object with a `parsed` key containing the loaded content or an `error` key if it failed.

Please refer to [dotenv](https://github.com/motdotla/dotenv#config) for more information.

## Parse

The engine which parses the contents of your file containing environment
variables is available to use. It accepts a String or Buffer and will return
an Object with the parsed keys and values.

Please refer to [dotenv](https://github.com/motdotla/dotenv#parse) for more information.

## FAQ

Please refer to [dotenv](https://github.com/motdotla/dotenv#faq) for more information.
