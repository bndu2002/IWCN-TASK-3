const express = require('express')
const router = express.Router()
const { postPhoenNumber } = require('../controller/controller')

router.get('/api/post/phone', postPhoenNumber)

module.exports = router