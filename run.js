import * as path from 'path';
global.appRoot = path.resolve(__dirname);

import run from './tools/run';

if (typeof run === 'function' && process.argv.length > 2) {
  delete require.cache[__filename];
  const module = require(`./tools/${process.argv[2]}.js`).default;
  run(module).catch(err => console.error(err.stack)); // eslint-disable-line no-console
}
