import webpack from 'webpack';
import merge from 'webpack-merge';
import common from './dist.common.config';

export default merge(common, {
  output: { filename: '[name].js' },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
  ],
});
