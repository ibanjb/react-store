import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack/dev.start.config';

process.env.BABEL_ENV = 'start';

const args = process.argv;
const port = Number(args[(args[4] && 4) || 3]) || 8080;

/**
 * Creates Dev-Server from the source files.
 */
async function start() {
  await new Promise((resolve, reject) => {
    // First we fire up Webpack an pass in the configuration we created
    let bundleStart = null;
    const compiler = webpack(webpackConfig);

    // We give notice in the terminal when it starts bundling and set the time it started
    compiler.plugin('compile', () => {
      console.log('Bundling...');
      bundleStart = Date.now();
    });

    // We also give notice when it is done compiling, including the time it took. Nice to have
    compiler.plugin('done', () => console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!'));

    const bundler = new WebpackDevServer(compiler, {
      // We need to tell Webpack to serve our bundled application
      // from the build path. When proxying:
      // http://localhost:3000/ -> http://localhost:8080/
      publicPath: '/',

      // Configure hot replacement
      hot: true,

      // The rest is terminal configurations
      quiet: false,
      noInfo: true,
      stats: {
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
      }
    });

    // We fire up the development server and give notice in the terminal
    // that we are starting the initial bundle
    bundler.listen(port || 8080, 'localhost', () => {
      console.log('Bundling project, please wait...');
      console.log(`App on ${port} Port`);
    });
  });
}

export default start;
