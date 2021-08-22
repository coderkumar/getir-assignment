
const express = require('express')
const router = express.Router();
const dataController = require('../controllers/data.controller')

router.get('/', function (req, res) {
    res.send('API service is up and runing' + process.env.ENV)
  })
  
module.exports = router;