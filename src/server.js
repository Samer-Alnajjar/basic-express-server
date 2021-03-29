"use strict"

// Importing packages and files
const express = require('express');
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const logger = require('./middlewares/logger.js');
const validator = require("./middlewares/validator.js");


// Configuring packages
const app = express();

// Global middleware
app.use(express.json());
app.use(logger);

//localhost:3000/person?

// Routes

app.get("/person", validator, handlePerson);

app.get('/bad', handleError);

app.use(errorHandler);

app.use('*', notFoundHandler);

// Functions

function handlePerson(req, res){
  // console.log(`__Query__`, req.query);
  const output = {
    name: req.query.name
  };
  res.json(output);
}

function handleError(req, res){
  throw new Error('something wrong!!');
}

function handleNotFound(req, res, next){
  next('something wrong!!');
}

// Listen to Port

function start(port){
  const PORT = port;
  app.listen(PORT, () => console.log(`Listening to PORT ${PORT}`));
}

module.exports = {
  app: app,
  start: start,
}
