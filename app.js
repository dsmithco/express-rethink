'use-strict';

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var React = require('react');
var renderToString = require('react-dom/server').renderToString;
var match = require('react-router').match;
var RouterContext = require('react-router').RouterContext;
var index = require('./routes/index');
var users = require('./routes/users');
var routes = require('./public/build/routes.js');
var sassMiddleware = require('node-sass-middleware');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(sassMiddleware({
    /* Options */
    src: __dirname + '/src/sass',
    dest: __dirname + '/public/stylesheets',
    debug: true,
    outputStyle: 'compressed',
    prefix:  '/stylesheets'  // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
}));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('*', index);
app.use('/users', users);
// universal routing and rendering
app.get('*', (req, res) => {
  match(
    { routes, location: req.url },
    (err, redirectLocation, renderProps) => {

      // in case of error display the error message
      if (err) {
        return res.status(500).send(err.message);
      }

      // in case of redirect propagate the redirect to the browser
      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }

      // generate the React markup for the current route
      let markup;
      if (renderProps) {
        // if the current route matched we have renderProps
        markup = renderToString(React.createElement(RouterContext, renderProps));
      } else {
        // otherwise we can render a 404 page
        // markup = renderToString(<NotFoundPage/>);
        res.status(404);
      }

      // render the index template with the embedded React markup
      return res.render('index', { markup });
    }
  );
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
