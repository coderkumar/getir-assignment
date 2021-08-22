
const express = require('express')
const router = express.Router();
const dataController = require('../controllers/data.controller')

router.post('/api/data', dataController.getData)

module.exports = router;