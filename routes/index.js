var express = require('express');
var router = express.Router();
var loggerjs = require("./logger");

/* GET home page. */
router.get('/sample', function(req, res, next) {
  loggerjs.debug("index called");
  loggerjs.debug(res.status());
  loggerjs.info(JSON.stringify({"ss":"ss"}));
  res.json({sample:"sample"});
});

module.exports = router;
