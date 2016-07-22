import HtmlWebpackPlugin from 'html-webpack-plugin';
import config from './config';
import merge from 'webpack-merge';
import common from './dev.common.config';

const args = process.argv;
const port = Number(args[(args[4] && 4) || 3]) || 8080;

export default merge(common, {
  entry: [
    'webpack/hot/dev-server',
    `webpack-dev-server/client?http://localhost:${port}`,
    config.paths.dev,
  ],
  output: {
    path: config.paths.src,
    // filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: config.paths.devTemplate,
      title: `${config.pkg.name} - ${config.pkg.description}`,
    }),
  ],
});
