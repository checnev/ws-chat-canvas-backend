const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.options('*', cors());

Object.keys(routes).forEach((route) => {
  app.use(route, routes[route]);
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.log(err.message);
});

module.exports = app;
