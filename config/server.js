// Requires
var express = require('express');
var consign = require('consign');

var app = express();

// Configue app
app.set('view engine', 'ejs');
app.set('views', './app/views');

// Register Routes
consign()
  .include('app/routes')
  .then('config/dbConnection.js')
  .then('app/models')
  .into(app);

// Exports
module.exports = app;
