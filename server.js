require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json());

const data = require('./src/routes/data.route');
app.use('/', data);

const home = require('./src/routes/home.route');
app.use('/', home);

module.exports = app;
