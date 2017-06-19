import express from 'express';
var Client = require('node-rest-client').Client;
var client = new Client();
let router = express.Router();

router.get('/*', function(req, res, next) {
  console.log(req);
  client.get("http://" + (process.env.API || 'localhost') + "/api/" + req.path, function (data, response) {
    res.json(data);
  });
});

module.exports = router;
