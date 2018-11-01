var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile('Catfacts.html', { root: 'public' });
});

router.get('/owl', function(req, res, next){
    request("https://catfact.ninja/facts?limit=30").pipe(res);
})


module.exports = router;