/**
 * Importing packages
 */
const express = require('express');
const config = require('./config/config');
const glob = require('glob');
const mongoose = require('mongoose');


/**
 * Connection to database
 */
mongoose.connect(config.db);


/**
 * Connection to database error handling
 */
const db = mongoose.connection;
db.on('error', () => {
  throw new Error('unable to connect to database at ' + config.db)
});


/**
 * Join models
 */
const models = glob.sync(config.root + '/app/models/*.js');
models.forEach((model) => require(model));


/**
 * Configure an application
 */
const app = express();
require('./config/express')(app, config);


/**
 * Run server
 */
app.listen(config.port, () => {
  console.log('Express server listening on port ' + config.port);
});

