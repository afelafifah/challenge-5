var express = require('express');
var router = express.Router();

let datausers = [
  {
    'id': 1,
    'username': 'admin',
    'password': 'admin',
    'token': 'token1'
  },
  {
    'id': 2,
    'username': 'afel',
    'password': '123qwe',
    'token': 'token2'
  }
]
// console.log(datausers)
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).json({
    'status' : 200,
    'msg' : 'Berhasil Get Data Users',
    'data' : datausers
  })
});

router.get('/:id', function(req, res, next){
  res.send(' respond ');
})

router.get('/login', function(req, res, next){
  res.render('login.ejs')
})
router.post('/login', function(req, res, next){
  //melakukan pengecekan username dan password
  datausers.map((item, index) => {
    //jika username dan password sama, kirim token
    if(item.username === req.body.username && item.password === req.body.password){
      // res.json({
      //   "message" : "login berhasil",
      //   "token": item.token
      // })
      res.redirect("/suits?isLogin=true");
    }
    else {
      res.render('/');
  }
  })

  res.json({
    "message": "username atau password salah"
  })
})


module.exports = router;
