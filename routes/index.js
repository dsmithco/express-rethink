var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var host = req.get('host').split(':')[0]
  res.render('index', { title: host, host: host });
});

module.exports = router;
