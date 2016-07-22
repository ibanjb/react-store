import webpack from 'webpack';
import merge from 'webpack-merge';
import common from './dist.common.config';

export default merge(common, {
  output: { filename: '[name].min.js' },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
  ],
});
