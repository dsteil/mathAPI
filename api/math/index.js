var router = require('express').Router()

router.use(require('./add'))
router.use(require('./sub'))


module.exports = router