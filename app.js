const express = require('express');

const app = express();
const createError = require('http-errors');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', (req, res) => res.send('Hello World'));

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
