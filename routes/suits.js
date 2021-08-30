var express = require ('express');
var router = express.Router();

// Get home page
const midd = (err, req, res, next) => {
    console.log(req)
}

router.get('/', midd, function (req, res, next){
    res.render('suits', {title:'Express'});
})

module.exports = router;