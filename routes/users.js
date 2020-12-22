var express = require('express');
var router = express.Router();
var users = require('../users');


/* GET users listing. */
router.get('/', function(req, res, next) {
  users.getUsers(function(err, result) {
    if (err) {
        res.send({error: err});
    } else {
        res.send({data: result});
    }
  });   
});

module.exports = router;
