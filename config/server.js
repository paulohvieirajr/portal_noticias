// Requires
var express = require('express');
var app = express();

// Configue
app.set('view engine', 'ejs');
app.set('views', './app/views');

// Exports
module.exports = app;
