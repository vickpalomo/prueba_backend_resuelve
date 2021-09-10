const express = require('express')
require('dotenv').config()
const router = express.Router()
const salary = require('./routes/salary')

router.use('/salary', salary)

module.exports = router
