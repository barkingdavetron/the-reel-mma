var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var lightweightRouter = require('./routes/lightweight');
var indexRouter = require('./routes/index');
var homeRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var faqRouter = require('./routes/faq');
var aboutRouter = require('./routes/about');
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(express.static(__dirname + '/images'));
app.use('/faq', faqRouter);
app.use('/', indexRouter);
app.use('/index', homeRouter);
app.use('/users', usersRouter);
app.use('/lightweight', lightweightRouter);
app.use('/about', aboutRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


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
