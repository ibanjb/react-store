import merge from 'webpack-merge';
import common from './dev.common.config';

export default merge(common, {
  externals: {
    'jsdom': 'window',
    cheerio: 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
});
