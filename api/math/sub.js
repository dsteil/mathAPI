var router = require('express').Router()

router.get('/math/sub/:x/:y', function (req, res, next) {
	var x = req.params.x;
	var y = req.params.y;
	res.send(x-y);
})



module.exports = router