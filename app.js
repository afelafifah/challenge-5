//memanggil modul / dependency
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


//memanggil module/file/local
// buat manggil file local
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var suitsRouter = require('./routes/suits');
// var loginRouter = require('./routes/login');
// var loginRouter = require('./')
const { nextTick } = require('process');
const e = require('express');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/',(req, res)=> {
//   res.render('index.ejs')
// })


app.use(function( req, res, next){
  console.log(req)
  if(req.path === '/' || req.path == '/users/login' || req.path == '/login'){
    //route halaman publik
    next(); // membolehkan lewat
  }
  else if (req.path === '/suits'){
    console.log(req.query.isLogin)
    if(req.query.isLogin == 'true'){
      next();
    } else {
      res.redirect('/login')
    }
  } else if (req.path == '/users'){
    if(req.headers.authorization == 'Bearer token1'){
      next()
    } else {
      res.redirect('/login')
    }
  } else if (req.path == '/users'){
    if(req.headers.authorization === 'Bearer token 1'){
      next()
    } else {
      res.json({
        'message' : 'anda tidak berhak akses api ini'
      })
    }
  } else {
    next(createError(404));
  }
})



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/suits', suitsRouter);
// app.use('/login', loginRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
