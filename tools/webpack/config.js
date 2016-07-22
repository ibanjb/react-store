import * as path from 'path';
const ROOT_DIR = appRoot || path.resolve(__dirname);
const pkg = require(path.join(ROOT_DIR, './package.json'));

export const AUTOPREFIXER_BROWSERS = [
  'Android 2.3', 'Android >= 4', 'Chrome >= 35', 'Firefox >= 31', 'Explorer >= 9',
  'iOS >= 7', 'Opera >= 12', 'Safari >= 7.1',
];

export const COMMON_CSS = [
  path.join(ROOT_DIR, './node_modules/normalize.css', './src/assets/css/bootstrap.min.css', './src/assets/css/material-kit.min.css'),
];

export const COMMON_JSON = [
  path.join(ROOT_DIR, './package.json'),
];

export function postcss(wpk) {
  return [
    require('postcss-import')({ addDependencyTo: wpk }),
    require('precss')(),
    require('autoprefixer')({ browsers: AUTOPREFIXER_BROWSERS }),
    require('postcss-discard-comments')(),
    require('cssnano')(),
  ];
}

export const externals = {
  express: 'express',
};

export default {
  paths: {
    dist: path.join(ROOT_DIR, './dist'),
    src: path.join(ROOT_DIR, './src'),
    dev: path.join(ROOT_DIR, './src/client.js'),
    devTemplate: path.join(ROOT_DIR, './src/index.html'),
  },
  pkg,
  filename: pkg.name,
  library: 'ReactStore',
};
