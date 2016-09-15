const path     = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env      = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'karimov-yer-one'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/karimov-yer-one-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'karimov-yer-one'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/karimov-yer-one-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'karimov-yer-one'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/karimov-yer-one-production'
  }
};

module.exports = config[env];
