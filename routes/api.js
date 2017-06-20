import express from 'express';
var Client = require('node-rest-client').Client;
var client = new Client();
let router = express.Router();


router.get('/pages', function(req, res, next) {
  console.log(req.headers);
  client.get("http://" + (process.env.API || req.headers.host.split(':')[0]) + "/api/pages", function (data, response) {
    res.json(data);
  });
});

router.get('/*', function(req, res, next) {
  console.log(req);
  client.get("http://" + (process.env.API || req.headers.host.split(':')[0]) + "/api" + req.path, function (data, response) {
    res.json(data);
  });
});

module.exports = router;
