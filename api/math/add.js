var router = require('express').Router()

router.get('/math/add/:x/:y', function (req, res, next) {
  var x = req.params.x;
  var y = req.params.y;
  res.json({result:parseInt(x)+parseInt(y)});
})



module.exports = router
