import webpack from 'webpack';
import config, { postcss, COMMON_CSS, COMMON_JSON } from './config';

const args = process.argv;
const webpackApplication = ((args[3] === 'map' || args[3] === 'search') && args[3]) || undefined;

export default {
  devtool: 'eval-source-map',
  resolve: {
    root: [config.paths.src],
    extensions: ['', '.js', '.jsx', '.css', '.png', '.jpg'],
  },
  module: {
    preLoaders: [
      { test: /\.jsx?$/, loaders: ['eslint'], include: config.paths.src },
    ],
    loaders: [
      { test: /\.json$/, loader: 'json', include: [config.paths.src, ...COMMON_JSON] },
      { test: /\.png$/, loader: 'url?limit=100000&mimetype=image/png', include: config.paths.src },
      { test: /\.jpg$/, loader: 'file', include: config.paths.src },
      {
        test: /^((?!\.module).)*(\.scss)$/ig,
        loaders: ['style', 'css', 'postcss'],
        include: [config.paths.src, ...COMMON_CSS],
      },
      {
        test: /\.module\.scss$/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss',
        include: [config.paths.src, ...COMMON_CSS],
      },
      { test: /\.jsx?$/, loaders: ['babel?cacheDirectory'], include: config.paths.src },
    ],
  },
  postcss,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
        'APPLICATION': JSON.stringify(webpackApplication || undefined),
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
