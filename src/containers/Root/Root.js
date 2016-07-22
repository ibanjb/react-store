if (process.env.NODE_ENV === 'development') {
  module.exports = require('./Root.dev.jsx');
} else {
  module.exports = require('./Root.prod.jsx');
}
