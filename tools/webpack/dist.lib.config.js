import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import config, { postcss, COMMON_CSS, COMMON_JSON } from './config';

export default {
  devtool: 'source-map',
  resolve: {
    root: [config.paths.src],
    extensions: ['', '.js', '.jsx', '.css', '.png', '.jpg'],
  },
  target: 'node',
  entry: {
    'app-clients': config.paths.dev,
  },
  output: {
    path: config.paths.dist,
    library: [config.library, '[name]'],
    libraryTarget: 'umd',
    filename: '[name].lib.js',
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json', include: [config.paths.src, ...COMMON_JSON] },
      { test: /\.png$/, loader: 'url?limit=100000&mimetype=image/png', include: config.paths.src },
      { test: /\.jpg$/, loader: 'file', include: config.paths.src },
      {
        test: /^((?!\.module).)*(\.scss)$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss'),
        include: [config.paths.src, ...COMMON_CSS],
      },
      {
        test: /\.module\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'),
        include: [config.paths.src, ...COMMON_CSS],
      },
      { test: /\.jsx?$/, loaders: ['babel'], include: config.paths.src },
    ],
  },
  postcss,
  plugins: [
    new ExtractTextPlugin('[name]-styles.css'),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
  ],
};

