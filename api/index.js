
var router = require('express').Router()

router.use('/api', require('./math'))

module.exports = router