'use strict';

var path = require('path');
var condense = require('condense-newlines');
var register = require('./register');
var data = require('./data');

module.exports = function(app, base, env, util) {
  app.use(register());

  app.preWrite(/\.js$/, function(file, next) {
    file.contents = new Buffer(condense(file.contents.toString()));
    next();
  });

  app.register('generators/*/index.js');

  app.task('generator', function(cb) {
    console.log('done');
    cb();
    // return app.src('templates/foo')
      // .pipe(app.conflicts())
      // .pipe(app.renderFile('*'))
      // .pipe(app.dest('.'));
  });

  app.task('default', ['generator']);
};
