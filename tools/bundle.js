import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackNormalConfig from './webpack/dist.normal.config';
import webpackMinifiedConfig from './webpack/dist.minified.config';
import webpackLibConfig from './webpack/dist.lib.config';

process.env.BABEL_ENV = 'dist';

const outputOptions = {
  context: undefined,       // (string) context directory for request shortening
  hash: false,              // add the hash of the compilation
  version: false,           // add webpack version information
  timings: true,            // add timing information
  assets: true,             // add assets information
  chunks: true,             // add chunk information
  chunkModules: false,      // add built modules information to chunk information
  colors: true,             // add console colors
  modules: false,           // add built modules information
  children: false,          // add children information
  cached: false,            // add also information about cached (not built) modules
  reasons: false,           // add information about the reasons why modules are included
  source: false,            // add the source code of modules
  errorDetails: false,      // add details to errors (like resolving log)
  chunkOrigins: false,      // add the origins of chunks and chunk merging info
  modulesSort: undefined,   // (string) sort the modules by that field
  chunksSort: undefined,    // (string) sort the chunks by that field
  assetsSort: undefined,    // (string) sort the assets by that field
};

export const normalBundleTask = (callback) => new Promise((resolve, reject) => {
  webpack(webpackNormalConfig).run((err, stats) => {
    if (typeof callback === 'function') callback();
    if (err) return reject(err);
    console.log(stats.toString(outputOptions));
    return resolve();
  });
});

export const minifiedBundleTask = (callback) => new Promise((resolve, reject) => {
  webpack(webpackMinifiedConfig).run((err, stats) => {
    if (typeof callback === 'function') callback();
    if (err) return reject(err);
    console.log(stats.toString(outputOptions));
    return resolve();
  });
});

export const libBundleTask = (callback) => new Promise((resolve, reject) => {
  webpack(webpackLibConfig).run((err, stats) => {
    if (typeof callback === 'function') callback();
    if (err) return reject(err);
    console.log(stats.toString(outputOptions));
    return resolve();
  });
});

/**
 * Creates application bundles from the source files.
 */
function bundle() {
  return new Promise((resolve) => {
    const taskStack = [normalBundleTask, minifiedBundleTask, libBundleTask];
    let taskIndex = 0;
    let task = taskStack[taskIndex];

    const callback = () => {
      taskIndex++;
      task = taskStack[taskIndex];

      if (typeof task === 'function') {
        task(callback);
      } else {
        resolve();
      }
    };

    task(callback);
  });
}

export default bundle;
